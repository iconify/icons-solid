import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn79_h0_p.css';
import '../../css/q/qt5cq3bzf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cn79_h0_p"/><path class="qt5cq3bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:share-all"} {...others} />);
}

export default Component;
