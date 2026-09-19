import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q99sspbda.css';
import '../../css/t/tayu-xb_w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q99sspbda"/><path class="tayu-xb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:haze"} {...others} />);
}

export default Component;
