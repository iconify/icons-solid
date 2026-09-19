import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p6u9y87vm.css';
import '../../css/r/rbcqgcc7u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p6u9y87vm"/><path class="rbcqgcc7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:internal-transmission"} {...others} />);
}

export default Component;
