import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4_xldbbg.css';
import '../../css/z/zlbz5jbgm.css';
import '../../css/z/zhg6ptbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4_xldbbg"/><path clip-rule="evenodd" class="zlbz5jbgm"/><path clip-rule="evenodd" class="zhg6ptbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dry-fill"} {...others} />);
}

export default Component;
