import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u14sdab1v.css';

const viewBox = {"width":397,"height":512};
const content = `<path clip-rule="evenodd" class="u14sdab1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:homebrew"} {...others} />);
}

export default Component;
