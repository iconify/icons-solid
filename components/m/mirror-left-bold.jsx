import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi_jt4bbp.css';
import '../../css/y/ykelgknbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wi_jt4bbp"/><path class="ykelgknbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-left-bold"} {...others} />);
}

export default Component;
