import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxps4fbgx.css';
import '../../css/h/huiwo0b9t.css';
import '../../css/b/b28kpcobb.css';
import '../../css/g/gtsfzdbog.css';
import '../../css/s/s9l6r_bsy.css';
import '../../css/a/advt5dbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yxps4fbgx"/><path class="huiwo0b9t"/><path class="b28kpcobb"/><path class="gtsfzdbog"/><path class="s9l6r_bsy"/><path class="advt5dbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-startup-mobile"} {...others} />);
}

export default Component;
