import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c61vqab-h.css';
import '../../css/z/zhfp_bkfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c61vqab-h"/><path class="zhfp_bkfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shovel"} {...others} />);
}

export default Component;
