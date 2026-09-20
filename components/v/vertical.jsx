import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2nxyhxbk.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq7rltb4k.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGtRhwnbMD" class="p2nxyhxbk"/></defs><g class="ft5dv1b6b"><use href="#SVGtRhwnbMD"/><path class="iq7rltb4k"/><use href="#SVGtRhwnbMD" class="av3m8fbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:vertical"} {...others} />);
}

export default Component;
