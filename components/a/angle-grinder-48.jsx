import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw15abcyx.css';
import '../../css/d/d2sisx8fh.css';
import '../../css/j/jge7z1bbh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pw15abcyx"/><path class="d2sisx8fh"/><path class="jge7z1bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:angle-grinder-48"} {...others} />);
}

export default Component;
