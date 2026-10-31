import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm9o7dbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fm9o7dbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-bottom-right-fill-round"} {...others} />);
}

export default Component;
