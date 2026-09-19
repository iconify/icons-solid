import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lk2fbiblq.css';
import '../../css/c/chzwg69ol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lk2fbiblq"/><path class="chzwg69ol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blueprint"} {...others} />);
}

export default Component;
