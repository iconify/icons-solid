import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyjlmrb5i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qyjlmrb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:headset-sparkle-stroke-16"} {...others} />);
}

export default Component;
