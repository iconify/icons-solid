import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3-_lcbqm.css';
import '../../css/w/w9b7p7brw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s3-_lcbqm"/><path class="w9b7p7brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:handshake-20"} {...others} />);
}

export default Component;
