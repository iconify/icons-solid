import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyrkcgbkt.css';
import '../../css/p/pkjpf3lqg.css';
import '../../css/a/a-g2__2wg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyrkcgbkt"/><path clip-rule="evenodd" class="pkjpf3lqg"/><path class="a-g2__2wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:notification-on-solid"} {...others} />);
}

export default Component;
