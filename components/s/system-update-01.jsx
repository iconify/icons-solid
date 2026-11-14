import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y6lm52i9f.css';
import '../../css/q/qwru_zbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y6lm52i9f"/><path class="qwru_zbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:system-update-01"} {...others} />);
}

export default Component;
