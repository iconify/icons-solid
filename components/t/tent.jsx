import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7ofx4a3v.css';
import '../../css/p/p3qk7zbod.css';
import '../../css/f/fwmst6b-l.css';
import '../../css/s/stou4fb7a.css';
import '../../css/e/e5jh53qpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v7ofx4a3v wm-k"/><path class="p3qk7zbod wm-k"/><path class="fwmst6b-l wm-k"/><path class="stou4fb7a wm-a"/><path class="e5jh53qpk wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tent"} {...others} />);
}

export default Component;
