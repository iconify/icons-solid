import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md5rxcbgi.css';
import '../../css/r/rh_lsv0bg.css';
import '../../css/q/qhf2oqbcs.css';
import '../../css/m/mmdfc-b9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="md5rxcbgi"/><path class="rh_lsv0bg"/><path class="qhf2oqbcs"/><path class="mmdfc-b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:beermug"} {...others} />);
}

export default Component;
