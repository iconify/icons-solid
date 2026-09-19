import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr5l77bcq.css';
import '../../css/i/ict8_2blf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rr5l77bcq"/><path class="ict8_2blf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apple-music"} {...others} />);
}

export default Component;
