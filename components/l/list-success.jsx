import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aiuyamb2n.css';
import '../../css/h/hpifqdbin.css';
import '../../css/t/t9unskp3q.css';
import '../../css/y/y0n8bl3bq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aiuyamb2n"/><circle class="hpifqdbin"/><circle class="t9unskp3q"/><path class="y0n8bl3bq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:list-success"} {...others} />);
}

export default Component;
