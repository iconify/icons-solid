import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo828zbqm.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":375,"height":375};
const content = `<defs><path id="SVGsLty1dHV" class="zo828zbqm"/></defs><use href="#SVGsLty1dHV" class="d2kvgvbvc"/><use href="#SVGsLty1dHV" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glincker-light"} {...others} />);
}

export default Component;
