import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8elyn5xu.css';
import '../../css/s/spzdkwgqo.css';
import '../../css/k/k256ozbaa.css';
import '../../css/b/b15fm3bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w8elyn5xu"/><path class="spzdkwgqo"/><circle class="k256ozbaa"/><path class="b15fm3bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:send-clock"} {...others} />);
}

export default Component;
