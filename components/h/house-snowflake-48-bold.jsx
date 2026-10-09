import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/n/njsy0lg8m.css';
import '../../css/i/ibk_3obac.css';
import '../../css/u/us_48ubxv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="njsy0lg8m"/><path class="ibk_3obac"/><path class="us_48ubxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-snowflake-48-bold"} {...others} />);
}

export default Component;
