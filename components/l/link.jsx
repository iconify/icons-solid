import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4_nkabvo.css';
import '../../css/x/xevlx76mo.css';
import '../../css/t/tn9jk3b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4_nkabvo wm-k"/><path class="wm-a xevlx76mo"/><path class="tn9jk3b0c wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:link"} {...others} />);
}

export default Component;
