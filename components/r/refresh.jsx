import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr8trj8pf.css';
import '../../css/n/nvor0_msi.css';
import '../../css/o/oz_5o-o8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wr8trj8pf"/><path class="nvor0_msi"/><path class="oz_5o-o8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:refresh"} {...others} />);
}

export default Component;
