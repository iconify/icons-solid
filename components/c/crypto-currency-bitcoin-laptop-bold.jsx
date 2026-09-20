import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmd-u2nlq.css';
import '../../css/a/axndlm-lm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmd-u2nlq"/><path class="axndlm-lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-laptop-bold"} {...others} />);
}

export default Component;
