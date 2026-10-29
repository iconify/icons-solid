import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/he7y-4bpu.css';
import '../../css/a/aolsmqbfe.css';
import '../../css/l/l9srymntf.css';
import '../../css/s/s-m01cccu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="he7y-4bpu"/><path class="aolsmqbfe wm-s"/><path class="l9srymntf wm-k"/><path class="s-m01cccu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:filter-x-sketch"} {...others} />);
}

export default Component;
