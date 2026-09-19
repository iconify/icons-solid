import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9g27pb1k.css';
import '../../css/s/soed_umth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9g27pb1k"/><path class="soed_umth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:boat-alt"} {...others} />);
}

export default Component;
