import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnu9rbbvf.css';
import '../../css/h/hezf90bhg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fnu9rbbvf"/><path class="hezf90bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:hd"} {...others} />);
}

export default Component;
