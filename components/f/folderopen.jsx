import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y93-0lb-q.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="y93-0lb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:folderopen"} {...others} />);
}

export default Component;
