import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsc84nzwy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bsc84nzwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:new-folder-flat"} {...others} />);
}

export default Component;
