import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox05h0bip.css';
import '../../css/t/t5n35bb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox05h0bip"/><path class="t5n35bb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xuanyuan"} {...others} />);
}

export default Component;
