import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l71jccbcp.css';
import '../../css/k/kmqkw0b2u.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8vdywoch.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/z/z4_3xccuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGxJuJPcsf" class="l71jccbcp"/><path id="SVGgnDT7bKa" class="kmqkw0b2u"/><mask id="SVG6mpklbXH"><g class="ft5dv1b6b"><path class="w8vdywoch"/><use href="#SVGxJuJPcsf" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGxJuJPcsf" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGxJuJPcsf" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGxJuJPcsf" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGgnDT7bKa" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGgnDT7bKa" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGgnDT7bKa" clip-rule="evenodd" class="a8y4fl3xp"/><use href="#SVGgnDT7bKa" clip-rule="evenodd" class="a8y4fl3xp"/><path class="z4_3xccuc"/></g></mask></defs><path mask="url(#SVG6mpklbXH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:triangle-ruler"} {...others} />);
}

export default Component;
