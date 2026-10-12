import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzrx_c-7b.css';
import '../../css/y/yydnv8u2g.css';
import '../../css/j/jib9akb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jzrx_c-7b"/><path class="yydnv8u2g"/><path clip-rule="evenodd" class="jib9akb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:server-plus-filled"} {...others} />);
}

export default Component;
