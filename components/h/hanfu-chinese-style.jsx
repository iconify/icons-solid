import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r3t3dybjj.css';
import '../../css/b/b5n1gackl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r3t3dybjj"/><path class="b5n1gackl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hanfu-chinese-style"} {...others} />);
}

export default Component;
