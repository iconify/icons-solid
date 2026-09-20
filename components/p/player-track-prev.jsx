import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdpwa7bpf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdpwa7bpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-track-prev"} {...others} />);
}

export default Component;
