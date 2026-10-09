import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocxzmlbuv.css';
import '../../css/w/wr0ronh9v.css';
import '../../css/i/iiv2y_blz.css';
import '../../css/b/b8indbcik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ocxzmlbuv"/><path class="wr0ronh9v"/><path class="iiv2y_blz"/><path class="b8indbcik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-maintenance-48-bold"} {...others} />);
}

export default Component;
