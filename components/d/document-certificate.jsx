import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zull_zb7v.css';
import '../../css/d/daj9nabrg.css';
import '../../css/k/krktqu-fm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zull_zb7v"/><path class="daj9nabrg"/><path class="krktqu-fm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:document-certificate"} {...others} />);
}

export default Component;
