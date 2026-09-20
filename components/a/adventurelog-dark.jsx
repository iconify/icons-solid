import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o25rrxbqg.css';
import '../../css/k/ky67sqbnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o25rrxbqg"/><path class="ky67sqbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adventurelog-dark"} {...others} />);
}

export default Component;
