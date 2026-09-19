import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/np8os2bqx.css';
import '../../css/i/ix2-pbbvg.css';
import '../../css/i/if1jqdb4b.css';
import '../../css/c/cmkpikb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="np8os2bqx"/><path class="ix2-pbbvg"/><path class="if1jqdb4b"/><path class="cmkpikb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-search"} {...others} />);
}

export default Component;
