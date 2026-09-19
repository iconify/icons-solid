import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvsnzr3ef.css';
import '../../css/t/taasc_mln.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qvsnzr3ef"/><path class="taasc_mln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:zoom-in"} {...others} />);
}

export default Component;
