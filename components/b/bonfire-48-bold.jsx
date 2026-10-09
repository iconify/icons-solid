import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6mc35b_l.css';
import '../../css/o/ofxcalb1g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i6mc35b_l"/><path class="ofxcalb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bonfire-48-bold"} {...others} />);
}

export default Component;
