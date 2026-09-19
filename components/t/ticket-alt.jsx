import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq6h8d1ig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tq6h8d1ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:ticket-alt"} {...others} />);
}

export default Component;
