import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f7k8k4bku.css';
import '../../css/l/l8n2f1bih.css';
import '../../css/a/af4alv-9w.css';
import '../../css/v/v9r__tesz.css';
import '../../css/z/zr246gf3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="f7k8k4bku"/><path class="l8n2f1bih"/><path class="af4alv-9w"/><path class="v9r__tesz"/><path class="zr246gf3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:database-position"} {...others} />);
}

export default Component;
