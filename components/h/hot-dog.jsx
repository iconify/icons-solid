import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wc9fc7_-j.css';
import '../../css/b/brlcsz9kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wc9fc7_-j"/><path class="brlcsz9kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hot-dog"} {...others} />);
}

export default Component;
