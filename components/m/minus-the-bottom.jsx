import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z1djr6bjd.css';
import '../../css/k/katd21ghy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z1djr6bjd"/><path class="katd21ghy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:minus-the-bottom"} {...others} />);
}

export default Component;
