import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcinz6npu.css';
import '../../css/g/gx8eojmco.css';
import '../../css/a/ax43zvhaq.css';
import '../../css/p/pq6n4cb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gcinz6npu"/><path class="gx8eojmco"/><path class="ax43zvhaq"/><path class="pq6n4cb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reload-heart"} {...others} />);
}

export default Component;
