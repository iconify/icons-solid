import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfr71u25j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfr71u25j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-plane-alt"} {...others} />);
}

export default Component;
