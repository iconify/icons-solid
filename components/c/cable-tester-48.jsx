import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsqftbbxf.css';
import '../../css/z/zm89rbh1i.css';
import '../../css/e/e_erz_s4t.css';
import '../../css/p/ptzd2rb1h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsqftbbxf"/><path class="zm89rbh1i"/><path class="e_erz_s4t"/><path class="ptzd2rb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-tester-48"} {...others} />);
}

export default Component;
