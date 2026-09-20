import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki5tbvs4d.css';
import '../../css/l/l_t0o44wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ki5tbvs4d"/><path class="l_t0o44wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-people-person-bubble-circle-1-bold"} {...others} />);
}

export default Component;
