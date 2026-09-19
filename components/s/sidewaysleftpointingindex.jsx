import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvxyd6bas.css';
import '../../css/u/uey765bln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tvxyd6bas"/><path class="uey765bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysleftpointingindex"} {...others} />);
}

export default Component;
