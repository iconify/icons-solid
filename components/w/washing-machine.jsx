import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i_8b8dbbp.css';
import '../../css/m/mfmgaufem.css';
import '../../css/g/g1-yzx_cx.css';
import '../../css/y/yi9vyzbdu.css';
import '../../css/h/hz3hnu3tt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i_8b8dbbp wm-shadow"/><path class="mfmgaufem wm-shadow"/><path class="g1-yzx_cx"/><path class="yi9vyzbdu"/><path class="hz3hnu3tt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:washing-machine"} {...others} />);
}

export default Component;
