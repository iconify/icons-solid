import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/v/v-2nxdbzn.css';
import '../../css/a/a4p4ujbri.css';
import '../../css/r/rxg13fbqg.css';
import '../../css/v/vy1xd4bhf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGG2eMibef"><g class="nsfne-b7l"><path class="v-2nxdbzn"/><path class="a4p4ujbri"/><path class="rxg13fbqg"/><path class="vy1xd4bhf"/></g></mask></defs><path mask="url(#SVGG2eMibef)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:skating"} {...others} />);
}

export default Component;
