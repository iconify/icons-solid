import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j8tqhzbcv.css';
import '../../css/t/t3h6qok3v.css';
import '../../css/s/s7eau4b8t.css';
import '../../css/h/hnhscoboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j8tqhzbcv"/><circle class="t3h6qok3v"/><path class="s7eau4b8t"/><path class="hnhscoboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:projector-01"} {...others} />);
}

export default Component;
