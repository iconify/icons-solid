import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e02a5kbah.css';
import '../../css/n/n5nnvotfx.css';

const viewBox = {"width":256,"height":252};
const content = `<path class="e02a5kbah"/><path class="n5nnvotfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mysql-light"} {...others} />);
}

export default Component;
