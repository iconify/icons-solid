import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsbj687dq.css';
import '../../css/a/aib90vbtg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tsbj687dq"/><path class="aib90vbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:brush-freehand"} {...others} />);
}

export default Component;
