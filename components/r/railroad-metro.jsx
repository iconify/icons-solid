import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mjshq-p0i.css';
import '../../css/v/voxv-6yle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mjshq-p0i"/><path class="voxv-6yle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:railroad-metro"} {...others} />);
}

export default Component;
