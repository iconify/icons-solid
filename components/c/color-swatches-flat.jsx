import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyfe8ccjv.css';
import '../../css/o/orv5kcbsy.css';
import '../../css/c/ci7lhgi9e.css';
import '../../css/y/yyg_db8oh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wyfe8ccjv"/><path class="orv5kcbsy"/><path class="ci7lhgi9e"/><path clip-rule="evenodd" class="yyg_db8oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:color-swatches-flat"} {...others} />);
}

export default Component;
