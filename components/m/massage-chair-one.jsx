import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xy2hh2bqh.css';
import '../../css/x/xub2jjf7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xy2hh2bqh"/><path class="xub2jjf7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:massage-chair-one"} {...others} />);
}

export default Component;
