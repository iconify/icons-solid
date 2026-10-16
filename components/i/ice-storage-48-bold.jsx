import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhwxisqb.css';
import '../../css/v/vjtu4jrxy.css';
import '../../css/y/yx458593i.css';
import '../../css/h/h9vdjeyrv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pzhwxisqb"/><path class="vjtu4jrxy"/><path class="yx458593i"/><path class="h9vdjeyrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-storage-48-bold"} {...others} />);
}

export default Component;
