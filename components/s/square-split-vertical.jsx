import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/os8oqcbut.css';
import '../../css/f/fjdvl-bkk.css';
import '../../css/i/ilo04bcis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="os8oqcbut"/><path class="fjdvl-bkk"/><path class="ilo04bcis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-vertical"} {...others} />);
}

export default Component;
