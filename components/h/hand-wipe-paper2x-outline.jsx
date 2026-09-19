import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lleu6zbks.css';
import '../../css/c/cmwq_sz7g.css';
import '../../css/n/nhl_5_bhw.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lleu6zbks"/><path class="cmwq_sz7g"/><path class="nhl_5_bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hand-wipe-paper2x-outline"} {...others} />);
}

export default Component;
