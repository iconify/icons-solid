import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcna6vb9x.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rcna6vb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tiktok-remix"} {...others} />);
}

export default Component;
