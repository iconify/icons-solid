import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/suw67z4bs.css';
import '../../css/p/plbg7nf0v.css';
import '../../css/r/r71_f-bif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="suw67z4bs"/><path class="plbg7nf0v"/><path class="r71_f-bif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:redo-dot"} {...others} />);
}

export default Component;
