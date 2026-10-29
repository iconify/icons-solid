import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj7d6qdsu.css';
import '../../css/c/ctzae4bou.css';
import '../../css/b/b2gy1lb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mj7d6qdsu"/><path class="ctzae4bou wm-k"/><path class="b2gy1lb5d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tablet-sketch"} {...others} />);
}

export default Component;
