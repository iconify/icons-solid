import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se4__r1yu.css';
import '../../css/j/jbg5enbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="se4__r1yu"/><path class="jbg5enbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-angle-bold-duotone"} {...others} />);
}

export default Component;
