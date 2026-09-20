import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4ft-0tpr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b4ft-0tpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:image-comment-light"} {...others} />);
}

export default Component;
