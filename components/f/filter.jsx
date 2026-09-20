import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvyjmfb4e.css';
import '../../css/f/fa_2iebty.css';
import '../../css/c/cdjguffgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvyjmfb4e"/><path class="fa_2iebty"/><path class="cdjguffgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:filter"} {...others} />);
}

export default Component;
