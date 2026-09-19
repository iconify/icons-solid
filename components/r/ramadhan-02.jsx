import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nspy7xbzc.css';
import '../../css/u/uqtz_ylrn.css';
import '../../css/y/y8nf-7b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nspy7xbzc"/><path class="uqtz_ylrn"/><path class="y8nf-7b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ramadhan-02"} {...others} />);
}

export default Component;
