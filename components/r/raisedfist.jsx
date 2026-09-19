import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k019gefpc.css';
import '../../css/f/flgqqpfqx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k019gefpc"/><path class="flgqqpfqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:raisedfist"} {...others} />);
}

export default Component;
