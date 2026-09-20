import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/v/v7hcqlbvq.css';
import '../../css/r/rhbbopbqk.css';
import '../../css/h/h80afpafx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="td-d9yzhb"/><path class="v7hcqlbvq"/><path class="rhbbopbqk"/><path class="h80afpafx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cloud-up-circle-filled"} {...others} />);
}

export default Component;
