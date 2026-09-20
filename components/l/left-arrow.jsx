import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7z5c_djq.css';
import '../../css/m/m76m0-g7k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r7z5c_djq"/><path class="m76m0-g7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-arrow"} {...others} />);
}

export default Component;
