import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/srt2qcb1u.css';
import '../../css/k/kbvsgtbry.css';
import '../../css/y/y027iebyk.css';
import '../../css/g/g77qpacdm.css';
import '../../css/z/z-103j1wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="srt2qcb1u wm-shadow"/><path class="kbvsgtbry"/><path class="y027iebyk"/><path class="g77qpacdm"/><path class="z-103j1wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:history"} {...others} />);
}

export default Component;
