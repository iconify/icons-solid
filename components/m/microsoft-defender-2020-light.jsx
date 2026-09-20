import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foawy0bhr.css';
import '../../css/j/jb0d_iq9v.css';
import '../../css/w/w38m_pb8z.css';
import '../../css/p/p-qfsebno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="foawy0bhr"/><path class="jb0d_iq9v"/><path class="w38m_pb8z"/><path class="p-qfsebno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-2020-light"} {...others} />);
}

export default Component;
