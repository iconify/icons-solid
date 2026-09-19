import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4edq5b_q.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d4edq5b_q"/><path class="lalksfbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-add-circle-outline"} {...others} />);
}

export default Component;
