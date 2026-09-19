import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtksr2b6j.css';
import '../../css/j/j4-0chb9k.css';
import '../../css/r/ratngrhrv.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="xtksr2b6j"/><path class="j4-0chb9k"/><path class="ratngrhrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:photograph"} {...others} />);
}

export default Component;
