import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_27ktbct.css';
import '../../css/s/s6-h7i0mw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p_27ktbct"/><path class="s6-h7i0mw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-down-right-enter"} {...others} />);
}

export default Component;
