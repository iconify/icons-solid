import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdzw-5b-o.css';
import '../../css/j/jx1563boq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bdzw-5b-o"/><path class="jx1563boq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oneuptime"} {...others} />);
}

export default Component;
