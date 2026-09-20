import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f25gi5bye.css';
import '../../css/g/groubrorl.css';
import '../../css/f/ft5hym8ya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="f25gi5bye"/><path class="groubrorl"/><path class="ft5hym8ya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-connection-sharp-two-tone"} {...others} />);
}

export default Component;
