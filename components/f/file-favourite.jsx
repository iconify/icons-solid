import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkpq_fbrv.css';
import '../../css/h/h9we6-6yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bkpq_fbrv"/><path class="h9we6-6yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-favourite"} {...others} />);
}

export default Component;
