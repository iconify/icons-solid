import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vob1vf30q.css';
import '../../css/l/lcw7lzboe.css';
import '../../css/v/vr5_q7bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vob1vf30q"/><path class="lcw7lzboe"/><path clip-rule="evenodd" class="vr5_q7bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-cross-outline"} {...others} />);
}

export default Component;
