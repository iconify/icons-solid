import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5mhbeaux.css';
import '../../css/b/bngjnhb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w5mhbeaux"/><path class="bngjnhb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:estimate-01"} {...others} />);
}

export default Component;
