import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gkg5wuyyy.css';
import '../../css/c/csszxg_wc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="gkg5wuyyy"/><path class="csszxg_wc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-work-station-1"} {...others} />);
}

export default Component;
