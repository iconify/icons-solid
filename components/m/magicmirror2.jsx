import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ydcvb-h.css';
import '../../css/n/n3w0hhuyz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o1ydcvb-h"/><path class="n3w0hhuyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:magicmirror2"} {...others} />);
}

export default Component;
