import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zvj-_tbck.css';
import '../../css/l/lzkg2p4uu.css';
import '../../css/g/gr3k9tf7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zvj-_tbck"/><circle class="lzkg2p4uu"/><path class="gr3k9tf7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:strategy"} {...others} />);
}

export default Component;
