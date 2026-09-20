import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/seltwacgv.css';
import '../../css/z/z-2i_jc3r.css';
import '../../css/w/w46t94bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="seltwacgv"/><path class="z-2i_jc3r"/><path class="w46t94bzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:virus-antivirus"} {...others} />);
}

export default Component;
