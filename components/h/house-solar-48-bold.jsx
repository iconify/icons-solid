import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7ykncbhd.css';
import '../../css/c/c0d8b832j.css';
import '../../css/l/ln_qjmbiv.css';
import '../../css/m/m46n-bb2h.css';
import '../../css/o/ohpw7equm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w7ykncbhd"/><path class="c0d8b832j"/><path class="ln_qjmbiv"/><path class="m46n-bb2h"/><path class="ohpw7equm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-solar-48-bold"} {...others} />);
}

export default Component;
