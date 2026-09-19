import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/t/tdlrk5qco.css';
import '../../css/u/urxhupwmb.css';
import '../../css/s/s7-urzb6m.css';
import '../../css/q/qlf_zqcoj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGw4mdSaaC"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="tdlrk5qco"/><path class="urxhupwmb"/><path class="s7-urzb6m"/><path class="qlf_zqcoj"/></g></mask></defs><path mask="url(#SVGw4mdSaaC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:layout-four"} {...others} />);
}

export default Component;
