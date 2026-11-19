import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/c/cp9yw3kis.css';
import '../../css/s/soxvlgxfm.css';
import '../../css/c/cj1f_obmg.css';
import '../../css/j/jrwva-mks.css';
import '../../css/m/mj77xchmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="vzkhs6b9b"/><path class="cp9yw3kis"/><path clip-rule="evenodd" class="soxvlgxfm"/><path class="cj1f_obmg"/><path class="jrwva-mks"/><path class="mj77xchmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-key"} {...others} />);
}

export default Component;
