import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch0locc9x.css';
import '../../css/v/vd3n2rbxy.css';
import '../../css/a/al_h_5jub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ch0locc9x"><path class="vd3n2rbxy"/><path class="al_h_5jub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:upload"} {...others} />);
}

export default Component;
