import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba9o2nfex.css';
import '../../css/b/br6jib3-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ba9o2nfex"/><path class="br6jib3-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cc"} {...others} />);
}

export default Component;
