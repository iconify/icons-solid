import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alente67r.css';
import '../../css/k/kby-w4n6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="alente67r"/><path class="kby-w4n6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:open-source-initiative"} {...others} />);
}

export default Component;
