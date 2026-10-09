import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1v0ij09t.css';
import '../../css/c/cv6p3wbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p1v0ij09t"/><path class="cv6p3wbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:handshake-48"} {...others} />);
}

export default Component;
