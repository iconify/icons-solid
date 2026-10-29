import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0tc6jbsw.css';
import '../../css/f/f1o6q914t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0tc6jbsw wm-k"/><path class="f1o6q914t wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:zap-off"} {...others} />);
}

export default Component;
