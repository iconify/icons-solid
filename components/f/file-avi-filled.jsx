import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kos5csu4z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kos5csu4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:file-avi-filled"} {...others} />);
}

export default Component;
