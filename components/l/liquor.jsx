import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0gpoumql.css';
import '../../css/p/prycx1bjg.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/q/qc27eib0g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOxs2SMJE" class="h0gpoumql"/><path id="SVGgtxS5biG" class="prycx1bjg"/></defs><g class="ft5dv1b6b"><use href="#SVGOxs2SMJE"/><use href="#SVGgtxS5biG"/><g class="av3m8fbrw"><use href="#SVGOxs2SMJE"/><use href="#SVGgtxS5biG"/></g><path class="qc27eib0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:liquor"} {...others} />);
}

export default Component;
