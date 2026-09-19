import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pvs4vzbqe.css';
import '../../css/j/jgxrsjbxi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pvs4vzbqe"/><rect class="jgxrsjbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:palm"} {...others} />);
}

export default Component;
