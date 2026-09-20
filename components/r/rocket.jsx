import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijr2x6b_i.css';
import '../../css/o/oytrt9bzh.css';
import '../../css/q/q86oxrfzk.css';
import '../../css/j/j2j98928d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ijr2x6b_i"/><path class="oytrt9bzh"/><path class="q86oxrfzk"/><circle transform="rotate(45 15.918 8.082)" class="j2j98928d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:rocket"} {...others} />);
}

export default Component;
