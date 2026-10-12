import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxyh9s5lq.css';
import '../../css/f/f5hnvrbvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kxyh9s5lq"/><path class="f5hnvrbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:tag-stroke-20"} {...others} />);
}

export default Component;
