import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdj5xab5v.css';
import '../../css/x/xe-aa8nas.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="gdj5xab5v"/><path class="xe-aa8nas"/><path class="egneazb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:file-plus"} {...others} />);
}

export default Component;
