import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2tew1o-z.css';
import '../../css/c/cp8_n08jx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y2tew1o-z"/><path class="cp8_n08jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:receipt"} {...others} />);
}

export default Component;
