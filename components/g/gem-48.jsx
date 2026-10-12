import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoag0abyi.css';
import '../../css/c/c1vxrxo6x.css';
import '../../css/i/imhsx5b4w.css';
import '../../css/p/plw6l7bwv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aoag0abyi"/><path class="c1vxrxo6x"/><path class="imhsx5b4w"/><path class="plw6l7bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gem-48"} {...others} />);
}

export default Component;
