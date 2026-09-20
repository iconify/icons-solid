import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fagntxw4g.css';
import '../../css/t/tqmas5pkf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fagntxw4g"/><path class="tqmas5pkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chibisafe-light"} {...others} />);
}

export default Component;
