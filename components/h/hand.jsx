import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o54a_403x.css';
import '../../css/l/lvufu95qt.css';
import '../../css/t/tgt0jgbav.css';
import '../../css/t/tjft3ex5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="o54a_403x"/><path class="lvufu95qt"/><path class="tgt0jgbav"/><path class="tjft3ex5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hand"} {...others} />);
}

export default Component;
