import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc_6km5yf.css';
import '../../css/f/ff2fwvbbo.css';
import '../../css/d/dxqmg8bmd.css';
import '../../css/p/py6l_fuet.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3PjI2dXl"><g class="ft5dv1b6b"><path class="pc_6km5yf"/><path class="ff2fwvbbo"/><path class="dxqmg8bmd"/><path class="py6l_fuet"/></g></mask></defs><path mask="url(#SVG3PjI2dXl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-display"} {...others} />);
}

export default Component;
