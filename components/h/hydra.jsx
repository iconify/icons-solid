import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssrgvpbcq.css';
import '../../css/m/mrxx9-b_x.css';
import '../../css/i/i8w3f8bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssrgvpbcq"/><path class="mrxx9-b_x"/><path class="i8w3f8bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hydra"} {...others} />);
}

export default Component;
