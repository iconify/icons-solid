import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjtkerbmh.css';
import '../../css/n/naf5r2twt.css';
import '../../css/q/qi3w0_b3l.css';
import '../../css/k/kehz7nk9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zjtkerbmh"/><path class="naf5r2twt"/><path class="qi3w0_b3l"/><path class="kehz7nk9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-touch"} {...others} />);
}

export default Component;
