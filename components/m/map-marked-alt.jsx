import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1p808bqf.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="b1p808bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:map-marked-alt"} {...others} />);
}

export default Component;
