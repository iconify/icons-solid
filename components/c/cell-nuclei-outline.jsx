import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auepnlsue.css';
import '../../css/w/wjmhvtbnf.css';
import '../../css/m/md1ii0b4j.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="auepnlsue"/><path clip-rule="evenodd" class="wjmhvtbnf"/><path clip-rule="evenodd" class="md1ii0b4j"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cell-nuclei-outline"} {...others} />);
}

export default Component;
