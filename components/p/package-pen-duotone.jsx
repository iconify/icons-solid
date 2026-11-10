import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tit41_b2e.css';
import '../../css/s/sb29uacxq.css';
import '../../css/s/slyauwbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tit41_b2e"/><path class="sb29uacxq"/><path class="slyauwbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-pen-duotone"} {...others} />);
}

export default Component;
