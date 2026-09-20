import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd5tj8ble.css';
import '../../css/w/whrd4ib9l.css';
import '../../css/n/ni7jvgb_f.css';
import '../../css/b/b6f-teahv.css';
import '../../css/s/syw26sb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rd5tj8ble"/><path class="whrd4ib9l"/><path class="ni7jvgb_f"/><path class="b6f-teahv"/><path class="syw26sb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:delivery-package-open"} {...others} />);
}

export default Component;
