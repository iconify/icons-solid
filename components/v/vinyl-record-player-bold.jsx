import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiq_k3ghp.css';
import '../../css/p/psisj8b5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiq_k3ghp"/><path class="psisj8b5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vinyl-record-player-bold"} {...others} />);
}

export default Component;
