import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_p-fzb8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="f_p-fzb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:jakefile"} {...others} />);
}

export default Component;
