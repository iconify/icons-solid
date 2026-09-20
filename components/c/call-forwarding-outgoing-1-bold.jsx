import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy6w7gb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hy6w7gb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:call-forwarding-outgoing-1-bold"} {...others} />);
}

export default Component;
