import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izq05d10w.css';
import '../../css/h/hezf90bhg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="izq05d10w"/><path class="hezf90bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:4k"} {...others} />);
}

export default Component;
