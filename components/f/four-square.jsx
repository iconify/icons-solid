import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvbs67blx.css';
import '../../css/z/zu_jtswwl.css';
import '../../css/c/cjzl9ubyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvbs67blx"/><path class="zu_jtswwl"/><path class="cjzl9ubyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:four-square"} {...others} />);
}

export default Component;
