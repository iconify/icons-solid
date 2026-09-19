import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g34w8dbuk.css';
import '../../css/o/okug9nb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g34w8dbuk"/><path class="okug9nb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:police-badge"} {...others} />);
}

export default Component;
