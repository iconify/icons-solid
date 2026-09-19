import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/j/jcoe6mbmz.css';
import '../../css/m/mmo_ywq2z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="jcoe6mbmz"/><path class="mmo_ywq2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:django"} {...others} />);
}

export default Component;
