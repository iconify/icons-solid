import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/mazv81bdt.css';
import '../../css/k/krvze5bnc.css';
import '../../css/h/hgbp8lbqj.css';
import '../../css/u/u8df5db-z.css';
import '../../css/t/tivrgubbs.css';
import '../../css/p/pscn3vw8e.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="mazv81bdt"/><path class="krvze5bnc"/></g><g class="hgbp8lbqj"><path class="u8df5db-z"/><path class="tivrgubbs"/><path class="pscn3vw8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nf-1x1"} {...others} />);
}

export default Component;
