import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/asf0t-lpg.css';
import '../../css/w/whodvvt6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="asf0t-lpg"/><path class="whodvvt6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quill-write-01"} {...others} />);
}

export default Component;
