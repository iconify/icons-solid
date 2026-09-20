import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gedh83xwq.css';
import '../../css/f/fm0wgfb-l.css';
import '../../css/w/wl6otcutx.css';
import '../../css/r/rpw199hlv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gedh83xwq"/><path class="fm0wgfb-l"/><path class="wl6otcutx"/><path class="rpw199hlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-network"} {...others} />);
}

export default Component;
