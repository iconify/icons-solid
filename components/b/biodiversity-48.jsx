import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riygzvb1b.css';
import '../../css/u/uvqoracym.css';
import '../../css/p/paqm3bmcx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="riygzvb1b"/><path class="uvqoracym"/><path class="paqm3bmcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biodiversity-48"} {...others} />);
}

export default Component;
