import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0id_gbau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0id_gbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:baseball-bat-ball-bold"} {...others} />);
}

export default Component;
