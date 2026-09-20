import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mteuttr2u.css';
import '../../css/d/drp_8bixm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mteuttr2u"/><path class="drp_8bixm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tools-kitchen-scale"} {...others} />);
}

export default Component;
