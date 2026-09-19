import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvmupi87j.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gvmupi87j"/><path class="wx-066bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:transform-language"} {...others} />);
}

export default Component;
