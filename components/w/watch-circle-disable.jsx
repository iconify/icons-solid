import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xhk16vb3f.css';
import '../../css/z/z1axs8b3r.css';
import '../../css/a/a6gsuvbxu.css';
import '../../css/f/f68x7_b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xhk16vb3f"/><path class="z1axs8b3r"/><path class="a6gsuvbxu"/><path class="f68x7_b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:watch-circle-disable"} {...others} />);
}

export default Component;
