import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbhxs5bet.css';
import '../../css/y/yokltxlsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbhxs5bet"/><path class="yokltxlsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mtv"} {...others} />);
}

export default Component;
