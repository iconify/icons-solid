import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rbkx84bkk.css';
import '../../css/j/jbwl3wbjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rbkx84bkk"/><path class="jbwl3wbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:code-computer"} {...others} />);
}

export default Component;
