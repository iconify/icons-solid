import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4sc0yb1a.css';
import '../../css/q/qcjn5ubrr.css';
import '../../css/t/tzoj6_rud.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j4sc0yb1a"/><path class="qcjn5ubrr"/><path clip-rule="evenodd" class="tzoj6_rud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:order-close-filled"} {...others} />);
}

export default Component;
