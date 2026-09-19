import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ha2lsv80e.css';
import '../../css/t/t17wrdbon.css';
import '../../css/y/yowglshyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ha2lsv80e"/><path class="t17wrdbon"/><path class="yowglshyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:software-uninstall"} {...others} />);
}

export default Component;
