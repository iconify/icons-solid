import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5vnngb7o.css';
import '../../css/f/f3mi_ybsx.css';
import '../../css/g/gd67pabfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g5vnngb7o"/><path class="f3mi_ybsx"/><path class="gd67pabfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sd-card-download"} {...others} />);
}

export default Component;
