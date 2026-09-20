import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/noxn8pb6n.css';
import '../../css/v/vwonsrtri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="noxn8pb6n"/><path class="vwonsrtri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reflect-down"} {...others} />);
}

export default Component;
