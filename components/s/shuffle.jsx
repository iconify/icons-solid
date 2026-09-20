import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iy3mnob7p.css';
import '../../css/e/e-qescbuo.css';
import '../../css/h/huu1r6ztb.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iy3mnob7p"/><path class="e-qescbuo"/><path class="huu1r6ztb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:shuffle"} {...others} />);
}

export default Component;
