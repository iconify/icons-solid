import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_pu1q0jg.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="i_pu1q0jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:unfold-horizontal-outline"} {...others} />);
}

export default Component;
