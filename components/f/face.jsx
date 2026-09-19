import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_gcfcnec.css';
import '../../css/v/vck_w0n2l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="i_gcfcnec"/><path class="vck_w0n2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:face"} {...others} />);
}

export default Component;
