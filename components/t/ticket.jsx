import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi6qjf9kl.css';
import '../../css/r/r2g9dxfqu.css';
import '../../css/q/qkesd0bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi6qjf9kl"/><path class="r2g9dxfqu"/><path class="qkesd0bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ticket"} {...others} />);
}

export default Component;
