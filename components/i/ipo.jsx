import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oh_e7zb2w.css';
import '../../css/w/wdi0syhdo.css';
import '../../css/u/ul5gnlx5m.css';
import '../../css/q/qodtiuben.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRkQAljxN"><g class="ufeehvblu"><path class="oh_e7zb2w"/><path class="wdi0syhdo"/><path class="ul5gnlx5m"/><ellipse class="qodtiuben"/></g></mask></defs><path mask="url(#SVGRkQAljxN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ipo"} {...others} />);
}

export default Component;
