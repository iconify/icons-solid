import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4b_ewb5v.css';
import '../../css/l/llk64db4t.css';
import '../../css/t/t000zacqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4b_ewb5v"/><path class="llk64db4t"/><path clip-rule="evenodd" class="t000zacqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-quote-bold"} {...others} />);
}

export default Component;
