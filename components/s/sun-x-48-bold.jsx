import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rul5h6brj.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/o/oqrsy3bng.css';
import '../../css/u/uq11f0fet.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rul5h6brj"/><path class="hwjgqrbah"/><path class="oqrsy3bng"/><path class="uq11f0fet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-x-48-bold"} {...others} />);
}

export default Component;
