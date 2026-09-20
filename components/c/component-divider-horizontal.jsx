import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9-vddblh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/e/eerv4xbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG67GspdNb" class="p9-vddblh"/></defs><g class="ft5dv1b6b"><use href="#SVG67GspdNb"/><use href="#SVG67GspdNb" class="av3m8fbrw"/><path class="eerv4xbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:component-divider-horizontal"} {...others} />);
}

export default Component;
