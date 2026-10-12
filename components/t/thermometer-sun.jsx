import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvx0l2qmh.css';
import '../../css/l/ld-j2zbhv.css';
import '../../css/w/wmvgymmly.css';
import '../../css/b/boyv3ih1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nvx0l2qmh"/><path class="ld-j2zbhv"/><path class="wmvgymmly"/><path class="boyv3ih1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-sun"} {...others} />);
}

export default Component;
