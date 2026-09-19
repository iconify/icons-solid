import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sj5m28f3q.css';
import '../../css/y/y-qaprb-g.css';
import '../../css/m/mue6u3r5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="sj5m28f3q"/><path class="y-qaprb-g"/><path class="mue6u3r5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:calendar"} {...others} />);
}

export default Component;
