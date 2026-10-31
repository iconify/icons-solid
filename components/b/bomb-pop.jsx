import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx82a3byw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/e/eyvktqb1m.css';
import '../../css/d/dnepp1baz.css';
import '../../css/f/f-u39pbjr.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="SVG5SN9EXXT" width="49" height="49" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="sx82a3byw"/></mask><g mask="url(#SVG5SN9EXXT)" class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="eyvktqb1m"/><path class="dnepp1baz"/><path class="f-u39pbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bomb-pop"} {...others} />);
}

export default Component;
