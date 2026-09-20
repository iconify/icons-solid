import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpj9684_w.css';
import '../../css/j/j062rccnk.css';
import '../../css/w/wobnozssh.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="kpj9684_w"/><path clip-rule="evenodd" class="j062rccnk"/><path clip-rule="evenodd" class="wobnozssh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:book"} {...others} />);
}

export default Component;
