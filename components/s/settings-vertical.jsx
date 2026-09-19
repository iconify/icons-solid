import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/e2idw3kgh.css';
import '../../css/h/hll5x1bic.css';
import '../../css/f/f5ay05zjp.css';
import '../../css/v/vwl1wf1bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="e2idw3kgh"/><circle transform="rotate(90 19 9)" class="hll5x1bic"/><circle transform="rotate(90 12 17)" class="f5ay05zjp"/><circle transform="rotate(90 5 7)" class="vwl1wf1bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:settings-vertical"} {...others} />);
}

export default Component;
