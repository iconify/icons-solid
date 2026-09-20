import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3y6xqgne.css';
import '../../css/p/p84959bnj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n3y6xqgne"/><path class="p84959bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mozilla-monitor-light"} {...others} />);
}

export default Component;
