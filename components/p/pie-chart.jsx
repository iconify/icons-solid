import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvsbw4j5h.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":20,"height":20};
const content = `<defs><path id="SVGtFnCvbNU" class="vvsbw4j5h"/></defs><use href="#SVGtFnCvbNU" class="cuyn6tgcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:pie-chart"} {...others} />);
}

export default Component;
