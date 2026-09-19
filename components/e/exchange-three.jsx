import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gj7mgbb6o.css';
import '../../css/d/dwjj-xavx.css';
import '../../css/n/nhqcy2b9w.css';
import '../../css/v/vujj_bc1c.css';
import '../../css/x/xjfnb9n4w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="gj7mgbb6o"/><path class="dwjj-xavx"/><path class="nhqcy2b9w"/><path class="vujj_bc1c"/><path class="xjfnb9n4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:exchange-three"} {...others} />);
}

export default Component;
