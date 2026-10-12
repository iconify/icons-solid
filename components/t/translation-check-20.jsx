import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bktlkzkpq.css';
import '../../css/r/roo4x4bjc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bktlkzkpq"/><path class="roo4x4bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-check-20"} {...others} />);
}

export default Component;
