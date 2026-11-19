import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7vo90bei.css';
import '../../css/s/s5gihzbsg.css';
import '../../css/h/hkkt5ubbt.css';
import '../../css/d/dansstb_e.css';
import '../../css/e/eacdg5sdq.css';
import '../../css/m/mtopd8f5j.css';
import '../../css/z/zatn6izdp.css';
import '../../css/j/junzlebmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="c7vo90bei"/><circle class="s5gihzbsg"/><path class="hkkt5ubbt"/><path class="dansstb_e"/><path class="eacdg5sdq"/><circle class="mtopd8f5j"/><circle class="zatn6izdp"/><path class="junzlebmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:restroom"} {...others} />);
}

export default Component;
