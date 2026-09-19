import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jw6zstywm.css';
import '../../css/v/v_s9ozb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jw6zstywm"/><path class="v_s9ozb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layout-right"} {...others} />);
}

export default Component;
