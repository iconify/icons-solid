import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c67lv1b0b.css';
import '../../css/n/n16h7snqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c67lv1b0b"/><path class="n16h7snqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:beach-bag"} {...others} />);
}

export default Component;
