import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kduvb0e1b.css';
import '../../css/q/qbzdmcc2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kduvb0e1b"/><path class="qbzdmcc2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-attach"} {...others} />);
}

export default Component;
