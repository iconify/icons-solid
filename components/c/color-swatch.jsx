import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7o1plwou.css';
import '../../css/s/shv_7pb8m.css';
import '../../css/i/ih1z0vbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z7o1plwou"/><path class="shv_7pb8m"/><path class="ih1z0vbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:color-swatch"} {...others} />);
}

export default Component;
