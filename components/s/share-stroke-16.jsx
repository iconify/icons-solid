import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihb_q5xeh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ihb_q5xeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:share-stroke-16"} {...others} />);
}

export default Component;
