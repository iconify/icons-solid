import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph9p3hbni.css';
import '../../css/m/mzc4obb9m.css';
import '../../css/o/obwihtkas.css';
import '../../css/p/p-yajvbte.css';
import '../../css/y/ycnp-c5_c.css';
import '../../css/m/mo44l72mq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ph9p3hbni"/><path class="mzc4obb9m"/><path class="obwihtkas"/><path class="p-yajvbte"/><path class="ycnp-c5_c"/><path class="mo44l72mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monkeysee"} {...others} />);
}

export default Component;
