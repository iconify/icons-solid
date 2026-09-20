import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oge_lhbou.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/p/pzb87xb0u.css';
import '../../css/k/ka48d2b9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oge_lhbou"/><path class="boz1ay-3b"/><circle class="pzb87xb0u"/><path class="ka48d2b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-search"} {...others} />);
}

export default Component;
