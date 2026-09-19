import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-9kwzbci.css';
import '../../css/l/lh4n09blc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y-9kwzbci"/><path class="lh4n09blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:filter-x"} {...others} />);
}

export default Component;
