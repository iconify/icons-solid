import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmgot2wmy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cmgot2wmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:new-folder-solid"} {...others} />);
}

export default Component;
