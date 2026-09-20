import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up77eln0u.css';

const viewBox = {"width":16,"height":17};
const content = `<path clip-rule="evenodd" class="up77eln0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:hourglass-16"} {...others} />);
}

export default Component;
