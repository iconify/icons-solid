import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t58ktzpqn.css';
import '../../css/h/hai_nbocs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t58ktzpqn"/><path clip-rule="evenodd" class="hai_nbocs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:instagram-fill-16"} {...others} />);
}

export default Component;
