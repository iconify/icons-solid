import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pufz7ezfi.css';
import '../../css/n/n1e5tdbro.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG4dQmpEDk" class="pufz7ezfi"/><path id="SVGZf3U7bMu" class="n1e5tdbro"/></defs><g class="ft5dv1b6b"><use href="#SVG4dQmpEDk"/><use href="#SVGZf3U7bMu"/><use href="#SVGZf3U7bMu" class="av3m8fbrw"/><use href="#SVG4dQmpEDk" class="av3m8fbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:support"} {...others} />);
}

export default Component;
