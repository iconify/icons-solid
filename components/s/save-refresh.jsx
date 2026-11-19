import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv94uo3wq.css';
import '../../css/o/oxfh0-byj.css';
import '../../css/r/r5rvbabsa.css';
import '../../css/z/za8auubyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dv94uo3wq"/><path class="oxfh0-byj"/><path class="r5rvbabsa"/><path class="za8auubyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:save-refresh"} {...others} />);
}

export default Component;
