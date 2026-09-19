import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm4x9mwjw.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="hm4x9mwjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:frown"} {...others} />);
}

export default Component;
