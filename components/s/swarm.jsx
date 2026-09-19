import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-rjfpb9o.css';
import '../../css/x/xyso4-t-l.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="i-rjfpb9o"/><path class="xyso4-t-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:swarm"} {...others} />);
}

export default Component;
