import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_k-aqhyd.css';
import '../../css/e/e6kjhpb-u.css';
import '../../css/u/upo1eubpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t_k-aqhyd"/><path class="e6kjhpb-u"/><path class="upo1eubpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:day-sunrise-2"} {...others} />);
}

export default Component;
