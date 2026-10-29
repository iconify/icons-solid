import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/owqqlgi1l.css';
import '../../css/i/igu498kqw.css';
import '../../css/t/tt8fklbvo.css';
import '../../css/m/mf-3ce6ro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="owqqlgi1l"/><path class="igu498kqw"/><path class="tt8fklbvo"/><path class="mf-3ce6ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:armchair-duo"} {...others} />);
}

export default Component;
