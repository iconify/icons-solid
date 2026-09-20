import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_w3injsq.css';
import '../../css/r/rwg8vfj3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_w3injsq"/><path class="rwg8vfj3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-cirle-bold"} {...others} />);
}

export default Component;
