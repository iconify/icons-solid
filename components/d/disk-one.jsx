import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kwx2jip_b.css';
import '../../css/f/fycnuihad.css';
import '../../css/y/yls-5ybpa.css';
import '../../css/z/znyalubse.css';
import '../../css/l/l7h3mebia.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="ufeehvblu"><path class="kwx2jip_b"/><rect class="fycnuihad"/><path class="yls-5ybpa"/><path class="znyalubse"/><path class="l7h3mebia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disk-one"} {...others} />);
}

export default Component;
