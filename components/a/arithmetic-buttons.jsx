import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qvnkb2bjl.css';
import '../../css/s/swhockboh.css';
import '../../css/x/xyg7c5_zf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="qvnkb2bjl"/><path class="swhockboh"/><path class="xyg7c5_zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:arithmetic-buttons"} {...others} />);
}

export default Component;
