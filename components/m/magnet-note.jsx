import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9k2y7bof.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="h9k2y7bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:magnet-note"} {...others} />);
}

export default Component;
