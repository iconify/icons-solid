import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sp5tj4b-c.css';
import '../../css/y/y-q2q4btu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sp5tj4b-c"/><path class="y-q2q4btu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-star"} {...others} />);
}

export default Component;
