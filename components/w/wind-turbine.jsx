import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3-fdubsi.css';
import '../../css/y/yr0-rkpxs.css';
import '../../css/p/povs420wf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGU2aZu04e"><g class="ft5dv1b6b"><path class="e3-fdubsi"/><path class="yr0-rkpxs"/><circle class="povs420wf"/></g></mask></defs><path mask="url(#SVGU2aZu04e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wind-turbine"} {...others} />);
}

export default Component;
