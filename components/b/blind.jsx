import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfo-7vb2n.css';
import '../../css/t/tcdvgs_6r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qfo-7vb2n"/><path class="tcdvgs_6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:blind"} {...others} />);
}

export default Component;
