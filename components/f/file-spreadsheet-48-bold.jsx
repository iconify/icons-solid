import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdos38jip.css';
import '../../css/q/qg5agn21g.css';
import '../../css/i/ilk5bdcug.css';
import '../../css/x/xuqxf6j_b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdos38jip"/><path class="qg5agn21g"/><path class="ilk5bdcug"/><path class="xuqxf6j_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-spreadsheet-48-bold"} {...others} />);
}

export default Component;
