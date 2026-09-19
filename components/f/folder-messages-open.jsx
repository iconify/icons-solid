import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/z/z4wztcbxb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><path clip-rule="evenodd" class="z4wztcbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-messages-open"} {...others} />);
}

export default Component;
