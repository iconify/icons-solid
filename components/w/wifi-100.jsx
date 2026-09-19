import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw6guzb1a.css';
import '../../css/y/y2u9_ob2n.css';

const viewBox = {"width":80,"height":80};
const content = `<defs><path id="SVGGOv5rcfr" class="tw6guzb1a"/></defs><g clip-rule="evenodd" class="y2u9_ob2n"><use href="#SVGGOv5rcfr"/><use href="#SVGGOv5rcfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:wifi-100"} {...others} />);
}

export default Component;
