import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozrj7jdhs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ozrj7jdhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:jigsaw-piece"} {...others} />);
}

export default Component;
