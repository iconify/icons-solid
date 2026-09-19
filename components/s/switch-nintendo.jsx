import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/goagzsb5h.css';
import '../../css/h/h9diwtebh.css';
import '../../css/v/vwfxigb9l.css';
import '../../css/e/eftnolbiv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs5xoxeDs"><g class="ft5dv1b6b"><path class="goagzsb5h"/><rect class="h9diwtebh"/><rect class="vwfxigb9l"/><path class="eftnolbiv"/></g></mask></defs><path mask="url(#SVGs5xoxeDs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:switch-nintendo"} {...others} />);
}

export default Component;
