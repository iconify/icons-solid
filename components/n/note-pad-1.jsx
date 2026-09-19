import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xvbk3hb0n.css';
import '../../css/t/tur_nnb9n.css';
import '../../css/m/mygfb2bqp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="s9cl3zbei"><rect class="xvbk3hb0n"/><path class="tur_nnb9n"/><path class="mygfb2bqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:note-pad-1"} {...others} />);
}

export default Component;
