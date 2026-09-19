import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvvx_2iyn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gvvx_2iyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:border-clear"} {...others} />);
}

export default Component;
