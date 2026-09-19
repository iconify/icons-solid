import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbahp1bvw.css';
import '../../css/f/f-auj7bix.css';
import '../../css/o/o0dq1pbzh.css';
import '../../css/t/tcbvmfb_w.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><circle class="vbahp1bvw"/><circle class="f-auj7bix"/><circle class="o0dq1pbzh"/><path class="tcbvmfb_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:list"} {...others} />);
}

export default Component;
