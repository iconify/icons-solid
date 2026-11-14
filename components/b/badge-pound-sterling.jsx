import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vw8ljybdn.css';
import '../../css/e/eliwlw23c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vw8ljybdn"/><path class="eliwlw23c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:badge-pound-sterling"} {...others} />);
}

export default Component;
