import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf04vdtkp.css';
import '../../css/y/yxe08ybje.css';
import '../../css/q/q1bn-vbpz.css';
import '../../css/a/a6c4neb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bf04vdtkp"/><path class="yxe08ybje"/><path clip-rule="evenodd" class="q1bn-vbpz"/><path class="a6c4neb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:trade"} {...others} />);
}

export default Component;
