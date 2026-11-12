import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krnj30b0h.css';
import '../../css/n/n8uyb4pln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="krnj30b0h"/><path class="n8uyb4pln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qd-dark"} {...others} />);
}

export default Component;
