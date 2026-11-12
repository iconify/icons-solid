import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2gmwachp.css';
import '../../css/x/xwt0ly2qh.css';
import '../../css/y/ys7g5m00i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2gmwachp"/><path class="xwt0ly2qh"/><path class="ys7g5m00i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qdrant-light"} {...others} />);
}

export default Component;
