import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iqb53xbyn.css';
import '../../css/k/k6dwz-brd.css';
import '../../css/u/ujlmsm8dc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iqb53xbyn"/><path class="k6dwz-brd"/><path class="ujlmsm8dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:french-fries-02"} {...others} />);
}

export default Component;
