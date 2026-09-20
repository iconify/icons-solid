import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay9fj-b3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ay9fj-b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:comment-16"} {...others} />);
}

export default Component;
