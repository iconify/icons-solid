import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i4vnvjbyp.css';
import '../../css/v/vwatux5wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i4vnvjbyp"/><path class="vwatux5wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unavailable"} {...others} />);
}

export default Component;
