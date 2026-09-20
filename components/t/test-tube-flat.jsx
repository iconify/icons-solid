import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uu1kc7jsn.css';
import '../../css/r/rw-cld8dx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uu1kc7jsn"/><path class="rw-cld8dx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:test-tube-flat"} {...others} />);
}

export default Component;
