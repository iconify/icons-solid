import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atr529omg.css';
import '../../css/t/tlb5s_7xb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atr529omg"/><path class="tlb5s_7xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chat"} {...others} />);
}

export default Component;
