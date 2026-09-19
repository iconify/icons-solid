import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a94hj8blz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a94hj8blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bowling-ball"} {...others} />);
}

export default Component;
