import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qempt5bxh.css';
import '../../css/e/e7pfvbb2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qempt5bxh"/><path class="e7pfvbb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proval"} {...others} />);
}

export default Component;
