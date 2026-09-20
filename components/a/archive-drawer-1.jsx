import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqb5k47cq.css';
import '../../css/v/vmv46cbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dqb5k47cq"/><path class="vmv46cbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:archive-drawer-1"} {...others} />);
}

export default Component;
