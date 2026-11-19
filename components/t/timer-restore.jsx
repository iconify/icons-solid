import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avx3q2b9r.css';
import '../../css/i/i85l-9wiw.css';
import '../../css/j/j7wxu_0-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="avx3q2b9r"/><path class="i85l-9wiw"/><path class="j7wxu_0-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-restore"} {...others} />);
}

export default Component;
