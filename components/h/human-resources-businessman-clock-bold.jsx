import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwh6u8bnv.css';
import '../../css/f/flcy1g-2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwh6u8bnv"/><path class="flcy1g-2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-businessman-clock-bold"} {...others} />);
}

export default Component;
