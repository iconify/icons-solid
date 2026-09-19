import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljz9_d-pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljz9_d-pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:merx-ipc-horizon-bullet"} {...others} />);
}

export default Component;
