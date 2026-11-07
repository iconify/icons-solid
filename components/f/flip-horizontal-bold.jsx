import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvxdh9bth.css';
import '../../css/h/hejbqv3cp.css';
import '../../css/p/p_2wznb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvxdh9bth"/><path class="hejbqv3cp"/><path clip-rule="evenodd" class="p_2wznb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-bold"} {...others} />);
}

export default Component;
