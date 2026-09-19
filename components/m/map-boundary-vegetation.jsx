import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5h-uebpt.css';
import '../../css/q/q74q21bgu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k5h-uebpt"/><path class="q74q21bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:map-boundary-vegetation"} {...others} />);
}

export default Component;
