import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o3p6lvrrw.css';
import '../../css/k/korwpy5cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o3p6lvrrw"/><path class="korwpy5cr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-locked"} {...others} />);
}

export default Component;
