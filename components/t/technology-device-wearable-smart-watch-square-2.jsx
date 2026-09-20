import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofw5tsb2a.css';
import '../../css/d/d2jm2ypzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ofw5tsb2a"/><path class="d2jm2ypzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-square-2"} {...others} />);
}

export default Component;
