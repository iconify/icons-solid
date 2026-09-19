import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sl23977et.css';
import '../../css/d/dbhu4ol5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sl23977et"/><path class="dbhu4ol5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pill-bottle"} {...others} />);
}

export default Component;
