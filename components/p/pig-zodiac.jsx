import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/g5eejacyb.css';
import '../../css/v/v34u89hpd.css';
import '../../css/m/mopo17b-n.css';
import '../../css/o/ojmvobcla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="g5eejacyb"/><path class="v34u89hpd"/><path class="mopo17b-n"/><path class="ojmvobcla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pig-zodiac"} {...others} />);
}

export default Component;
