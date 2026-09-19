import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/b/b9h-f8bxl.css';
import '../../css/v/vb28crb_k.css';
import '../../css/g/g5e8xw6vn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="b9h-f8bxl"/><path class="vb28crb_k"/><path class="g5e8xw6vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-close"} {...others} />);
}

export default Component;
