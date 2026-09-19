import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jtczhhbqf.css';
import '../../css/i/ix7o0oh5h.css';
import '../../css/j/j1qaecczu.css';
import '../../css/s/sc5sy_bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jtczhhbqf"/><path class="ix7o0oh5h"/><path class="j1qaecczu"/><path class="sc5sy_bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rabbit"} {...others} />);
}

export default Component;
