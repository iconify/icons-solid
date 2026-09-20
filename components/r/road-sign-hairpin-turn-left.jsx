import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vowc67b4w.css';
import '../../css/y/yvmidnbxf.css';
import '../../css/t/ted1_ibvk.css';
import '../../css/e/e-1o21bsj.css';
import '../../css/s/s262tv_sm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vowc67b4w"/><path class="yvmidnbxf"/><path class="ted1_ibvk"/><path class="e-1o21bsj"/><path class="s262tv_sm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:road-sign-hairpin-turn-left"} {...others} />);
}

export default Component;
