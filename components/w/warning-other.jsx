import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxj_3jtzx.css';
import '../../css/t/t18caz0-h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fxj_3jtzx"/><path class="t18caz0-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-other"} {...others} />);
}

export default Component;
