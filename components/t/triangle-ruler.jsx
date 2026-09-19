import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utitaqbbj.css';
import '../../css/i/i91jsibrw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oe6n9ms3z.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/p/pc-_m4b8v.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGxTtoRd9V" class="utitaqbbj"/><path id="SVGVgFcecGu" class="i91jsibrw"/></defs><g class="ft5dv1b6b"><path class="oe6n9ms3z"/><use href="#SVGxTtoRd9V" clip-rule="evenodd"/><use href="#SVGxTtoRd9V" clip-rule="evenodd"/><use href="#SVGxTtoRd9V" clip-rule="evenodd"/><use href="#SVGxTtoRd9V" clip-rule="evenodd"/><use href="#SVGVgFcecGu" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGVgFcecGu" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGVgFcecGu" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGVgFcecGu" clip-rule="evenodd" class="a8y4fl3xp"/><path class="pc-_m4b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:triangle-ruler"} {...others} />);
}

export default Component;
