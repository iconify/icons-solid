import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qx-conzms.css';
import '../../css/t/thejpcp7b.css';
import '../../css/z/z_d8lcj7j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qx-conzms"/><path class="thejpcp7b"/><path class="z_d8lcj7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:massage-chair-one"} {...others} />);
}

export default Component;
