import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/r/rirt7bcol.css';
import '../../css/m/mxo2jdblw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="rirt7bcol"/><path class="mxo2jdblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:todo"} {...others} />);
}

export default Component;
