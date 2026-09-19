import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1ejgib4k.css';
import '../../css/g/grac-wbyl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q1ejgib4k"/><path class="grac-wbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:top-left"} {...others} />);
}

export default Component;
