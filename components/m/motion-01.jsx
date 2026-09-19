import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sguyahb_u.css';
import '../../css/y/ys9oqyb_w.css';
import '../../css/i/i8h8tzdlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sguyahb_u"/><path class="ys9oqyb_w"/><path class="i8h8tzdlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:motion-01"} {...others} />);
}

export default Component;
