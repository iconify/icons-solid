import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zxk766oyl.css';
import '../../css/d/druhbeb8i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="zxk766oyl"/><path class="druhbeb8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:curve-adjustment"} {...others} />);
}

export default Component;
