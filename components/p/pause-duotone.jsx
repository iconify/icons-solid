import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7p8u_bgx.css';
import '../../css/t/t2z2jnber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7p8u_bgx"/><path class="t2z2jnber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pause-duotone"} {...others} />);
}

export default Component;
