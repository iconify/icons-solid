import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_agx_bnn.css';
import '../../css/f/fv8j5jbkf.css';
import '../../css/n/n7rzczb-e.css';
import '../../css/w/wun81vb8v.css';
import '../../css/o/on2cwtbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_agx_bnn wm-a"/><path class="fv8j5jbkf wm-k"/><path class="n7rzczb-e wm-k"/><path class="wm-a wun81vb8v"/><path class="on2cwtbnl wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:handshake"} {...others} />);
}

export default Component;
