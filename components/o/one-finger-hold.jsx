import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqke4i0do.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kqke4i0do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:one-finger-hold"} {...others} />);
}

export default Component;
