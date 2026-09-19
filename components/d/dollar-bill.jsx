import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyoonebhp.css';
import '../../css/i/i7yk66pmz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xyoonebhp"/><path class="i7yk66pmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:dollar-bill"} {...others} />);
}

export default Component;
