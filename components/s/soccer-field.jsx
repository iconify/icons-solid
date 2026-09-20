import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/behj_bbnf.css';
import '../../css/u/uqesg5bpl.css';
import '../../css/t/tzh7aenjl.css';
import '../../css/r/rlyej6brl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="behj_bbnf"/><path class="uqesg5bpl"/><path class="tzh7aenjl"/><path class="rlyej6brl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:soccer-field"} {...others} />);
}

export default Component;
