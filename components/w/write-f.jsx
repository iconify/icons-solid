import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1dqn_bgp.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-0.5};
const content = `<path class="p1dqn_bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:write-f"} {...others} />);
}

export default Component;
