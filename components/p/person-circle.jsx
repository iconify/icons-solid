import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb0ejrbgl.css';
import '../../css/b/bl_l48dcr.css';
import '../../css/v/vrio1vbcf.css';
import '../../css/k/kdgt5ac4e.css';
import '../../css/a/ak0v_fljm.css';
import '../../css/q/q-0tevbrd.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sb0ejrbgl"/><g transform="translate(3 3)"><g clip-rule="evenodd" class="bl_l48dcr"><path class="vrio1vbcf"/><path class="kdgt5ac4e"/></g><circle class="ak0v_fljm"/><path class="q-0tevbrd"/></g><path clip-rule="evenodd" class="jfigzne9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:person-circle"} {...others} />);
}

export default Component;
