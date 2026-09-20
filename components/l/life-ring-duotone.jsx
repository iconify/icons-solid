import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waw-uxbxv.css';
import '../../css/z/zgt55-51t.css';
import '../../css/t/thnkyr3yj.css';
import '../../css/d/dgxfih-4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="waw-uxbxv"/><path class="zgt55-51t"/><path class="thnkyr3yj"/><path class="dgxfih-4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:life-ring-duotone"} {...others} />);
}

export default Component;
