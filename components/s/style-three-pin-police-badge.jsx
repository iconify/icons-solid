import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx-xz6bun.css';
import '../../css/j/jdqbwqbkq.css';
import '../../css/p/pv372ebij.css';
import '../../css/o/ooxufwkop.css';
import '../../css/q/q6zz1g6bc.css';
import '../../css/e/es0xrup2j.css';
import '../../css/j/jrxheu9ub.css';
import '../../css/e/e7hqcdcgc.css';
import '../../css/z/zz626zshg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zx-xz6bun"/><path class="jdqbwqbkq"/><path class="pv372ebij"/><path class="ooxufwkop"/><path class="q6zz1g6bc"/><path class="es0xrup2j"/><path class="jrxheu9ub"/><path class="e7hqcdcgc"/><path class="zz626zshg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-three-pin-police-badge"} {...others} />);
}

export default Component;
