import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikwwh-bte.css';
import '../../css/w/w950tvqcf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ikwwh-bte"/><path class="w950tvqcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:fax"} {...others} />);
}

export default Component;
