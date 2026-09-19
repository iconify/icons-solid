import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7ee_c0lu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l7ee_c0lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clockwiseleftrightarrows"} {...others} />);
}

export default Component;
