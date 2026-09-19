import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh_k5d__w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uh_k5d__w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-lollipop"} {...others} />);
}

export default Component;
