import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a4t2l3b2j.css';
import '../../css/w/wetcoibrm.css';
import '../../css/h/h3t_fhb_o.css';
import '../../css/e/e7h-jwcvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="a4t2l3b2j"/><path class="wetcoibrm"/><path class="h3t_fhb_o"/><path class="e7h-jwcvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:horizontal-slider-square"} {...others} />);
}

export default Component;
