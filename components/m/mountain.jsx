import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqvdv-i1a.css';
import '../../css/z/zs9rwbb7v.css';
import '../../css/y/y1l26kb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zqvdv-i1a"/><path class="zs9rwbb7v"/><path class="y1l26kb-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mountain"} {...others} />);
}

export default Component;
