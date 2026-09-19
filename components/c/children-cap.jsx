import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sgc6nbcvj.css';
import '../../css/k/keebtzb8q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="sgc6nbcvj"/><rect class="keebtzb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:children-cap"} {...others} />);
}

export default Component;
