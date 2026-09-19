import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxcix4bwn.css';
import '../../css/l/ltk4tpqua.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zxcix4bwn"/><path class="ltk4tpqua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:speech"} {...others} />);
}

export default Component;
