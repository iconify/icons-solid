import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvumqbbpt.css';
import '../../css/r/r57oj4lrq.css';
import '../../css/h/hpd8x5bdc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zvumqbbpt"/><path clip-rule="evenodd" class="r57oj4lrq"/><path class="hpd8x5bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:color-picker-flat"} {...others} />);
}

export default Component;
