import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxqxy8b7d.css';
import '../../css/h/hywgiubeg.css';
import '../../css/d/dl1squaus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wxqxy8b7d"/><path class="hywgiubeg"/><path clip-rule="evenodd" class="dl1squaus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-vibrate-flat"} {...others} />);
}

export default Component;
