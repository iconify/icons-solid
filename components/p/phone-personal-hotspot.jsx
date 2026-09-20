import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/aeecnkbfe.css';
import '../../css/w/wlew973ma.css';
import '../../css/m/mc3dr5bbm.css';
import '../../css/u/ujojq53uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="aeecnkbfe"/><path class="wlew973ma"/><path class="mc3dr5bbm"/><path class="ujojq53uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-personal-hotspot"} {...others} />);
}

export default Component;
