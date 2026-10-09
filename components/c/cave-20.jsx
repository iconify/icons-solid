import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tztkndb_y.css';
import '../../css/u/ubixxqbpx.css';
import '../../css/x/xnnvlwb_a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tztkndb_y"/><path class="ubixxqbpx"/><path class="xnnvlwb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cave-20"} {...others} />);
}

export default Component;
