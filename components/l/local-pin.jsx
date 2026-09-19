import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/y7ic1bu-x.css';
import '../../css/o/ok5knhbhc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4WajydOT"><g class="v3_i3wktz"><path class="y7ic1bu-x"/><path class="ok5knhbhc"/></g></mask></defs><path mask="url(#SVG4WajydOT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:local-pin"} {...others} />);
}

export default Component;
