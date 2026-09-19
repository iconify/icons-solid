import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp3507b3q.css';
import '../../css/m/mef_eabep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp3507b3q"/><path class="mef_eabep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:building-house"} {...others} />);
}

export default Component;
