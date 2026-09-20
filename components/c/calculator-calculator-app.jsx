import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tq557m70x.css';
import '../../css/p/ptbcjcfqf.css';
import '../../css/c/cvihrobuv.css';
import '../../css/s/s8efgpcwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tq557m70x"/><path class="ptbcjcfqf"/><path class="cvihrobuv"/><path class="s8efgpcwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:calculator-calculator-app"} {...others} />);
}

export default Component;
