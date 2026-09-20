import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aw5voeb3o.css';
import '../../css/h/hqhuvccbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="aw5voeb3o"/><path class="hqhuvccbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-check-sharp-fill"} {...others} />);
}

export default Component;
