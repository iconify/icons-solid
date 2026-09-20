import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zeduepbhn.css';
import '../../css/w/wtvgx2i5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zeduepbhn"/><path class="wtvgx2i5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lock-hierarchy"} {...others} />);
}

export default Component;
