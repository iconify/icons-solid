import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/ys67npbsn.css';
import '../../css/x/xfswdop-m.css';
import '../../css/x/xtbnnobia.css';
import '../../css/n/nzuotib9e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRBQrpehk"><g class="s9cl3zbei"><path class="ys67npbsn"/><path class="xfswdop-m"/><path class="xtbnnobia"/><path class="nzuotib9e"/></g></mask></defs><path mask="url(#SVGRBQrpehk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baggage-delay"} {...others} />);
}

export default Component;
