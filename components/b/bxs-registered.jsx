import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0jxknbfz.css';
import '../../css/j/jmjky1e4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c0jxknbfz"/><path class="jmjky1e4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-registered"} {...others} />);
}

export default Component;
