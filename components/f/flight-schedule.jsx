import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjzjafblt.css';
import '../../css/j/ji95cg_id.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pjzjafblt"/><path class="ji95cg_id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flight-schedule"} {...others} />);
}

export default Component;
