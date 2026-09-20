import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmmn-y2cs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xmmn-y2cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globe-outline"} {...others} />);
}

export default Component;
