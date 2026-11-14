import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mdbcilbso.css';
import '../../css/q/qonh3zbpu.css';
import '../../css/k/kj5sz9cps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mdbcilbso"/><path class="qonh3zbpu"/><path class="kj5sz9cps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-edit-02"} {...others} />);
}

export default Component;
