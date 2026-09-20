import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs1lgy2sf.css';
import '../../css/f/ft-qacc5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qs1lgy2sf"/><path class="ft-qacc5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-list-pin-bold"} {...others} />);
}

export default Component;
