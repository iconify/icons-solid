import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywb_xebdd.css';
import '../../css/d/d4flrw67a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywb_xebdd"/><path class="d4flrw67a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:group"} {...others} />);
}

export default Component;
