import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz3s7sbjt.css';
import '../../css/i/i8zr05b0h.css';
import '../../css/b/bn7-8p0jr.css';
import '../../css/b/bq0mkp6qi.css';
import '../../css/x/x8bpfnz5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iz3s7sbjt"/><path class="i8zr05b0h"/><path class="bn7-8p0jr"/><path class="bq0mkp6qi"/><path class="x8bpfnz5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:game-controller-screen"} {...others} />);
}

export default Component;
