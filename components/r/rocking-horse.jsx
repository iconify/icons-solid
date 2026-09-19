import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sg-1m7b3a.css';
import '../../css/x/xx_r_sbcu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="sg-1m7b3a"/><path class="xx_r_sbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rocking-horse"} {...others} />);
}

export default Component;
