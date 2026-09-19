import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on8cg0b3o.css';
import '../../css/i/ieyn-bn4v.css';
import '../../css/p/pdb_u-bkr.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><g id="SVGEMZ5HduN"><g id="SVGGTty7bMH"><path id="SVGwkBBpcNU" class="on8cg0b3o"/><use href="#SVGwkBBpcNU" transform="scale(-1 1)"/></g><g id="SVGlgVBhBlu"><use href="#SVGGTty7bMH" transform="rotate(72)"/><use href="#SVGGTty7bMH" transform="rotate(144)"/></g><use href="#SVGlgVBhBlu" transform="scale(-1 1)"/></g></defs><path class="ieyn-bn4v"/><g transform="translate(256 258.4)scale(25.28395)" class="pdb_u-bkr"><use width="100%" height="100%" y="-6" href="#SVGEMZ5HduN"/><use width="100%" height="100%" y="6" href="#SVGEMZ5HduN"/><g id="SVGCH9N7c3I"><use width="100%" height="100%" x="-6" href="#SVGEMZ5HduN"/><use width="100%" height="100%" href="#SVGEMZ5HduN" transform="rotate(-144 -2.3 -2.1)"/><use width="100%" height="100%" href="#SVGEMZ5HduN" transform="rotate(144 -2.1 -2.3)"/><use width="100%" height="100%" href="#SVGEMZ5HduN" transform="rotate(72 -4.7 -2)"/><use width="100%" height="100%" href="#SVGEMZ5HduN" transform="rotate(72 -5 .5)"/></g><use width="100%" height="100%" href="#SVGCH9N7c3I" transform="scale(-1 1)"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:eu-1x1"} {...others} />);
}

export default Component;
