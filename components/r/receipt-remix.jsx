import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if1i_5bwm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="if1i_5bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:receipt-remix"} {...others} />);
}

export default Component;
