import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3zf_zbjk.css';
import '../../css/o/o_p7u2d0a.css';
import '../../css/m/mqdf1uo2w.css';
import '../../css/u/ume4id0ov.css';
import '../../css/s/s1acenbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h3zf_zbjk wm-k"/><path class="o_p7u2d0a wm-k"/><path class="mqdf1uo2w wm-k"/><path class="ume4id0ov wm-k"/><path class="s1acenbqs wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shirt"} {...others} />);
}

export default Component;
