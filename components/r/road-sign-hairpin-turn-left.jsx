import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dabc3ybij.css';
import '../../css/g/geoysppjk.css';
import '../../css/u/uzzwf3bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dabc3ybij"/><path class="geoysppjk"/><path class="uzzwf3bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-sign-hairpin-turn-left"} {...others} />);
}

export default Component;
