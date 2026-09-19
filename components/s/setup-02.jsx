import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ns5w6ubak.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/s/st3qdy0bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ns5w6ubak"/><circle class="peiq2hfxm"/><path class="st3qdy0bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setup-02"} {...others} />);
}

export default Component;
