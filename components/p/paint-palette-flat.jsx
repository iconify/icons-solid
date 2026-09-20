import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnz52ebry.css';
import '../../css/g/g7_wtmbhv.css';
import '../../css/m/mocrc9bgj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cnz52ebry"/><path clip-rule="evenodd" class="g7_wtmbhv"/><path class="mocrc9bgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:paint-palette-flat"} {...others} />);
}

export default Component;
