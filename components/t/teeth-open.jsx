import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncaoi_bhk.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ncaoi_bhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:teeth-open"} {...others} />);
}

export default Component;
