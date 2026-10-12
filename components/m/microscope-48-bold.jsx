import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9znmuz9h.css';
import '../../css/z/zbnp1eb-z.css';
import '../../css/z/zbd81tbqz.css';
import '../../css/r/r4oyi0vwt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9znmuz9h"/><path class="zbnp1eb-z"/><path class="zbd81tbqz"/><path class="r4oyi0vwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microscope-48-bold"} {...others} />);
}

export default Component;
