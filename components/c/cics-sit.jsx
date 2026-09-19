import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpje9lbhk.css';
import '../../css/r/rkrmrebfr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zpje9lbhk"/><path class="rkrmrebfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-sit"} {...others} />);
}

export default Component;
