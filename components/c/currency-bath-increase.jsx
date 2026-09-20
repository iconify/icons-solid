import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbw7w4bcu.css';
import '../../css/d/ddx29cc4a.css';
import '../../css/n/nm2nnfboj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbw7w4bcu"/><path class="ddx29cc4a"/><path class="nm2nnfboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:currency-bath-increase"} {...others} />);
}

export default Component;
