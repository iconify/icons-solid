import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_l_77bcd.css';
import '../../css/h/hbryolsnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_l_77bcd"/><path class="hbryolsnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:factory"} {...others} />);
}

export default Component;
