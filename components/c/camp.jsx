import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xltgi6s1j.css';
import '../../css/l/l7hhb1bii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xltgi6s1j"/><path class="l7hhb1bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:camp"} {...others} />);
}

export default Component;
