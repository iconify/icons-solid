import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymhblhbvq.css';
import '../../css/s/s2m_4lbwf.css';
import '../../css/k/k-q1j33lg.css';
import '../../css/p/pp5xcodpa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymhblhbvq"/><path clip-rule="evenodd" class="s2m_4lbwf"/><path clip-rule="evenodd" class="k-q1j33lg"/><path clip-rule="evenodd" class="pp5xcodpa"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-y-off"} {...others} />);
}

export default Component;
