import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuyntrele.css';
import '../../css/y/y8ocdrfcn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fuyntrele"/><rect class="y8ocdrfcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:help-sharp"} {...others} />);
}

export default Component;
