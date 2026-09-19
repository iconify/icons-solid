import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4_czfbpz.css';
import '../../css/u/uhn9qnbwc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r4_czfbpz"/><path class="uhn9qnbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:settings"} {...others} />);
}

export default Component;
