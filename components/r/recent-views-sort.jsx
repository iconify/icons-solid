import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sywh_d5sb.css';
import '../../css/u/uidlf3bnh.css';
import '../../css/h/het1cerok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1gk2AcMZ"><g class="ft5dv1b6b"><path class="sywh_d5sb"/><path class="uidlf3bnh"/><path class="het1cerok"/></g></mask></defs><path mask="url(#SVG1gk2AcMZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:recent-views-sort"} {...others} />);
}

export default Component;
