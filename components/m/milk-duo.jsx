import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozqscv-4w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7odni4zo.css';
import '../../css/p/pcozc4xmy.css';
import '../../css/s/sg1dwbdru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozqscv-4w secondary"/><g class="dt0cm9dhy primary"><path class="d7odni4zo"/><path class="pcozc4xmy"/><path class="sg1dwbdru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:milk-duo"} {...others} />);
}

export default Component;
