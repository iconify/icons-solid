import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/oan152bkl.css';
import '../../css/v/v3sybybfr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGG6xKxdRX"><g class="v3_i3wktz"><path class="oan152bkl"/><path class="v3sybybfr"/></g></mask></defs><path mask="url(#SVGG6xKxdRX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-line-area"} {...others} />);
}

export default Component;
