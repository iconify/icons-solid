import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/apst68bcm.css';
import '../../css/v/v5dr9sbpb.css';
import '../../css/l/l0am3zboh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="apst68bcm"/><path class="v5dr9sbpb"/><path class="l0am3zboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-operator"} {...others} />);
}

export default Component;
