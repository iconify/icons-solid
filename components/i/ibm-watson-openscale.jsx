import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzh6_5bci.css';
import '../../css/t/t987snbfx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vzh6_5bci"/><path class="t987snbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-openscale"} {...others} />);
}

export default Component;
