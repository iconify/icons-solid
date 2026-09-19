import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/h/hlphpxw-c.css';
import '../../css/u/uxm1d3bda.css';
import '../../css/d/dxmp8bbom.css';
import '../../css/e/eyfkbwiwd.css';
import '../../css/v/vcl_nyzks.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="hlphpxw-c"/><path class="uxm1d3bda"/><path class="dxmp8bbom"/><path class="eyfkbwiwd"/><path class="vcl_nyzks"/><path class="lxqch5bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-hiding-one"} {...others} />);
}

export default Component;
