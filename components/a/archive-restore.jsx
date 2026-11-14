import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmej89b4w.css';
import '../../css/h/hnyfp36zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fmej89b4w"/><path class="hnyfp36zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-restore"} {...others} />);
}

export default Component;
