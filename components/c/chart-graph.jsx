import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/ode45e42f.css';
import '../../css/j/j4e641bye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUYR4IUYW"><g class="v3_i3wktz"><path class="ode45e42f"/><path class="j4e641bye"/></g></mask></defs><path mask="url(#SVGUYR4IUYW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-graph"} {...others} />);
}

export default Component;
