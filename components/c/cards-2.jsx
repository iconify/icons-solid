import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c55493v1g.css';
import '../../css/b/bqjua11ue.css';
import '../../css/k/kqfy6qbnk.css';
import '../../css/u/ulxn265js.css';
import '../../css/i/ip9haibig.css';
import '../../css/f/fbbo6zp2k.css';
import '../../css/t/t_9l1pb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c55493v1g"/><path class="bqjua11ue"/><path class="kqfy6qbnk"/><path class="ulxn265js"/><path class="ip9haibig"/><path class="fbbo6zp2k"/><path class="t_9l1pb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cards-2"} {...others} />);
}

export default Component;
