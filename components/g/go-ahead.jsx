import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jiofabc0v.css';
import '../../css/d/dd618zbye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jiofabc0v"/><path class="dd618zbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:go-ahead"} {...others} />);
}

export default Component;
