import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knrki_leo.css';
import '../../css/z/z9sersb6j.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="knrki_leo"/><path class="z9sersb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:upload"} {...others} />);
}

export default Component;
