import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6xx_uqow.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a6xx_uqow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:inflection-ai-dark"} {...others} />);
}

export default Component;
