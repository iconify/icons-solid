import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmp9nzblx.css';
import '../../css/f/fnb-t_u4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmp9nzblx"/><path class="fnb-t_u4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-voice-filled"} {...others} />);
}

export default Component;
