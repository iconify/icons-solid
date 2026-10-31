import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vusy_2blq.css';
import '../../css/m/m81jhhb3m.css';
import '../../css/t/t1ijvbdyl.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vusy_2blq"/><path class="m81jhhb3m"/><path class="t1ijvbdyl wm-shine"/><path class="euhc06b6i wm-k"/><path class="r309anzoi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:building"} {...others} />);
}

export default Component;
