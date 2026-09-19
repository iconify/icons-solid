import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chigjbbio.css';
import '../../css/o/ogr-x4b7p.css';
import '../../css/q/qvlwvom8r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="chigjbbio"/><path clip-rule="evenodd" class="ogr-x4b7p"/><path clip-rule="evenodd" class="qvlwvom8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-voucher2x-outline"} {...others} />);
}

export default Component;
