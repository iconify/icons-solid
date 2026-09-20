import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzd-zfwgv.css';
import '../../css/z/zu6ruz7sb.css';
import '../../css/w/wel6b6bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fzd-zfwgv"/><path class="zu6ruz7sb"/><rect class="wel6b6bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-digit"} {...others} />);
}

export default Component;
