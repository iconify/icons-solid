import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed8frza5k.css';
import '../../css/f/flnzlxb3t.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x39yvob4g.css';
import '../../css/c/c-zrgpb5l.css';

const viewBox = {"width":80,"height":80};
const content = `<defs><path id="SVGbybY6dlk" class="ed8frza5k"/><path id="SVGGs7tNMeN" class="flnzlxb3t"/></defs><g class="ft5dv1b6b"><use href="#SVGbybY6dlk" class="x39yvob4g"/><use href="#SVGbybY6dlk" class="x39yvob4g"/><use href="#SVGGs7tNMeN" class="c-zrgpb5l"/><use href="#SVGGs7tNMeN" class="c-zrgpb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-100-duo"} {...others} />);
}

export default Component;
