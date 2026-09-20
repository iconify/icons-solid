import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d8dnwsbdq.css';
import '../../css/y/ys1e-dbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d8dnwsbdq"/><path class="ys1e-dbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sos-sign"} {...others} />);
}

export default Component;
