import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sigfwwf4r.css';
import '../../css/k/kamdbib6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sigfwwf4r"/><path class="kamdbib6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:locker"} {...others} />);
}

export default Component;
