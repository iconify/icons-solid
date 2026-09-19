import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o41m8lb5r.css';
import '../../css/k/k9f04dteg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o41m8lb5r"/><path class="k9f04dteg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:logout-03"} {...others} />);
}

export default Component;
