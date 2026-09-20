import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8wstgbkt.css';
import '../../css/q/q1m15dbht.css';
import '../../css/i/i4sl-ib2t.css';
import '../../css/n/n5nl6mb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n8wstgbkt"/><circle class="q1m15dbht"/><path class="i4sl-ib2t"/><circle class="n5nl6mb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:brightness"} {...others} />);
}

export default Component;
