import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9r8s4rsw.css';
import '../../css/h/h6klkqbsh.css';
import '../../css/q/qf19skb9v.css';
import '../../css/e/eux5nikfz.css';
import '../../css/i/ihq6w6b0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d9r8s4rsw"/><path class="h6klkqbsh"/><circle class="qf19skb9v"/><path class="eux5nikfz"/><path class="ihq6w6b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:figma-light"} {...others} />);
}

export default Component;
