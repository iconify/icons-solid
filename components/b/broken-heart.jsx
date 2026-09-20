import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppraaqd4k.css';
import '../../css/a/ak1w57shr.css';
import '../../css/b/b_qi0n4ks.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/c-zrgpb5l.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGTTJSXbHO" class="ppraaqd4k"/><path id="SVGUDJcZdQb" class="ak1w57shr"/></defs><g class="b_qi0n4ks"><use href="#SVGTTJSXbHO"/><use href="#SVGUDJcZdQb"/></g><g class="x8poo_bjf"><use href="#SVGTTJSXbHO" class="c-zrgpb5l"/><use href="#SVGUDJcZdQb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:broken-heart"} {...others} />);
}

export default Component;
