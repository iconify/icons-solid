import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5ez0fb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5ez0fb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sort-descending-duocolor-round"} {...others} />);
}

export default Component;
