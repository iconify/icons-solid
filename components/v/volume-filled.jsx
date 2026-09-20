import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni8v59ceb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ni8v59ceb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:volume-filled"} {...others} />);
}

export default Component;
