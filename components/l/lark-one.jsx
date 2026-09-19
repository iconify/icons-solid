import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uondj3csi.css';
import '../../css/i/iz9qeihpv.css';
import '../../css/b/bpqpvpasa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uondj3csi"/><path clip-rule="evenodd" class="iz9qeihpv"/><path class="bpqpvpasa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lark-one"} {...others} />);
}

export default Component;
