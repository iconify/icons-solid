import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taasc_mln.css';
import '../../css/e/eu8t76b8h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="taasc_mln"/><path class="eu8t76b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:zoom-fit"} {...others} />);
}

export default Component;
