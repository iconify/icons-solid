import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2jemxbtx.css';
import '../../css/h/hb-mrxbke.css';
import '../../css/i/iu6q92b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v2jemxbtx"/><path class="hb-mrxbke"/><path class="iu6q92b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-circle-app-2"} {...others} />);
}

export default Component;
