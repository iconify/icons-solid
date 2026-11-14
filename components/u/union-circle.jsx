import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z09_8kduf.css';
import '../../css/g/gjly36blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z09_8kduf"/><path class="gjly36blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:union-circle"} {...others} />);
}

export default Component;
