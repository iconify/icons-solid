import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4o0brbkb.css';
import '../../css/d/dxgf3sb-g.css';
import '../../css/f/f83er7b7j.css';
import '../../css/r/rfrcf3bnc.css';
import '../../css/c/cmkhqnkwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z4o0brbkb"/><path class="dxgf3sb-g"/><path class="f83er7b7j"/><path class="rfrcf3bnc"/><path class="cmkhqnkwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:heart-protect"} {...others} />);
}

export default Component;
