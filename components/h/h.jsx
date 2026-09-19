import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xspq7il3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="xspq7il3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:h"} {...others} />);
}

export default Component;
