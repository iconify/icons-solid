import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz_wa7byo.css';
import '../../css/f/fhlupx00x.css';
import '../../css/k/ka7tfjekq.css';
import '../../css/e/eryeldb2m.css';
import '../../css/h/hz9x32b5t.css';
import '../../css/i/ivdvkcmlb.css';
import '../../css/u/ut1eg1q1g.css';
import '../../css/p/pflx05bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz_wa7byo"/><path class="fhlupx00x"/><path class="ka7tfjekq"/><path class="eryeldb2m"/><path class="hz9x32b5t"/><path class="ivdvkcmlb"/><path class="ut1eg1q1g"/><path class="pflx05bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-2-fill"} {...others} />);
}

export default Component;
