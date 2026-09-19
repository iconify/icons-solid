import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmya2ccpk.css';
import '../../css/g/gg1luzbnt.css';
import '../../css/t/t_to33i-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmya2ccpk"/><path clip-rule="evenodd" class="gg1luzbnt"/><rect class="t_to33i-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:milk-filled"} {...others} />);
}

export default Component;
