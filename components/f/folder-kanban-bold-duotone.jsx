import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2nrf10bf.css';
import '../../css/i/i-sqrpb3f.css';
import '../../css/r/rzypoebor.css';
import '../../css/z/zmdi14bfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2nrf10bf"/><path class="i-sqrpb3f"/><path class="rzypoebor"/><path class="zmdi14bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-kanban-bold-duotone"} {...others} />);
}

export default Component;
