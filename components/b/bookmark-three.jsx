import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y-877re4b.css';
import '../../css/k/k6zlnfbds.css';
import '../../css/s/sn732sb0c.css';
import '../../css/s/syfxwtbnl.css';
import '../../css/i/i437zqp9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfgN0EcsS"><g class="ufeehvblu"><path class="y-877re4b"/><path class="k6zlnfbds"/><path class="sn732sb0c"/><path class="syfxwtbnl"/><path class="i437zqp9j"/></g></mask></defs><path mask="url(#SVGfgN0EcsS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bookmark-three"} {...others} />);
}

export default Component;
