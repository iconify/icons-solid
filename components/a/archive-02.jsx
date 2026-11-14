import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aaw98bbnd.css';
import '../../css/n/ni_9-t59v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aaw98bbnd"/><path class="ni_9-t59v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-02"} {...others} />);
}

export default Component;
