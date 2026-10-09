import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvm03rryn.css';
import '../../css/h/h_1byfbub.css';
import '../../css/k/kv9lofb8u.css';
import '../../css/b/b2i4qcwof.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bvm03rryn"/><path class="h_1byfbub"/><path class="kv9lofb8u"/><path class="b2i4qcwof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:languages-48"} {...others} />);
}

export default Component;
