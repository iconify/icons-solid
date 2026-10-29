import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkpkzmbva.css';
import '../../css/g/gu930pb7q.css';
import '../../css/e/euvnksixb.css';
import '../../css/v/vx_f-t51f.css';
import '../../css/x/xmqcpbcif.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xkpkzmbva"/><path class="gu930pb7q"/><path class="euvnksixb"/><path class="vx_f-t51f"/><path class="wm-shine xmqcpbcif"/><path class="ll48iosqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:octagon-x"} {...others} />);
}

export default Component;
