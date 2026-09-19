import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cufh5c1yt.css';

const viewBox = {"width":2671,"height":800};
const content = `<path class="cufh5c1yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:yapcasialogo"} {...others} />);
}

export default Component;
