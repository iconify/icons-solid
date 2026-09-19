import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_2b0vb0m.css';
import '../../css/j/j3pf-l97n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_2b0vb0m"/><circle class="j3pf-l97n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:pizza"} {...others} />);
}

export default Component;
