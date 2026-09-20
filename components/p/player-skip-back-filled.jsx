import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_i0ahlhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_i0ahlhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:player-skip-back-filled"} {...others} />);
}

export default Component;
