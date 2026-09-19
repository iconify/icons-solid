import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s4zvpcc_e.css';
import '../../css/g/gr78cdb7s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcRltieMe"><g class="v3_i3wktz"><path class="s4zvpcc_e"/><path class="gr78cdb7s"/></g></mask></defs><path mask="url(#SVGcRltieMe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:road-sign-both"} {...others} />);
}

export default Component;
