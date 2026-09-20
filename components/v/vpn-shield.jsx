import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgf9veboy.css';
import '../../css/o/ov4h-ebxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qgf9veboy"/><path class="ov4h-ebxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vpn-shield"} {...others} />);
}

export default Component;
