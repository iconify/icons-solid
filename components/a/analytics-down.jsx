import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zt1kts5cj.css';
import '../../css/x/x07gi_bsw.css';
import '../../css/o/osr3gdbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zt1kts5cj"/><path class="x07gi_bsw"/><path class="osr3gdbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:analytics-down"} {...others} />);
}

export default Component;
