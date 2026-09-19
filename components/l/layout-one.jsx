import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/w/ws_yc2k8c.css';
import '../../css/r/ripen2bkw.css';
import '../../css/f/f3_0cobop.css';
import '../../css/m/maeqajb2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsGcWxeuY"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ws_yc2k8c"/><path class="ripen2bkw"/><path class="f3_0cobop"/><path class="maeqajb2d"/></g></mask></defs><path mask="url(#SVGsGcWxeuY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:layout-one"} {...others} />);
}

export default Component;
