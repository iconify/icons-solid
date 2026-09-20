import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o7xf-nb_r.css';
import '../../css/u/u32la56ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="o7xf-nb_r"/><path class="u32la56ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:upload-download-traffic-data-transfer-hexagon"} {...others} />);
}

export default Component;
