import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dc8ea8trm.css';
import '../../css/h/hk62-obry.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/j/ja3fu9-gv.css';
import '../../css/w/wa9b2vb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dc8ea8trm wm-shadow"/><path class="hk62-obry wm-shadow"/><path class="hhwgsyjct"/><path class="ja3fu9-gv"/><path class="wa9b2vb-y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:volume-off"} {...others} />);
}

export default Component;
