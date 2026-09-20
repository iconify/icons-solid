import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9lsp2bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u9lsp2bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-in-picture-line"} {...others} />);
}

export default Component;
