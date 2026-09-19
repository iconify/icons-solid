import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5ykkg6js.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5ykkg6js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:list-numbered-rtl"} {...others} />);
}

export default Component;
