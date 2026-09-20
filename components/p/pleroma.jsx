import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is_bib.css';
import '../../css/y/ydovum.css';
import '../../css/r/rek8ly.css';
import '../../css/d/d_veic.css';
import '../../css/d/d-g-t0ye.css';
import '../../css/d/d-u2wfvb.css';
import '../../css/d/d-tpcgta.css';
import '../../css/d/d-y53qgi.css';
import '../../css/d/d-ysi9rn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="is_bib ydovum"/><path class="rek8ly ydovum"/><path class="d_veic ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pleroma"} {...others} />);
}

export default Component;
