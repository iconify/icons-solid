import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ofdb5_b4q.css';
import '../../css/f/f_w9a8bji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ofdb5_b4q"/><path class="f_w9a8bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cycle-one"} {...others} />);
}

export default Component;
