import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdt2tgb-r.css';
import '../../css/p/p__bsbi5q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vdt2tgb-r"/><path class="p__bsbi5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calagopus-dark"} {...others} />);
}

export default Component;
