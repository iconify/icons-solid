import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d7fcmubvd.css';
import '../../css/n/nvfv0uzwv.css';
import '../../css/g/gavebgz5n.css';
import '../../css/t/teuc2rbxh.css';
import '../../css/j/jjnejlbtj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d7fcmubvd"/><path class="nvfv0uzwv"/><path class="gavebgz5n"/><path class="teuc2rbxh"/><path class="jjnejlbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pound-circle"} {...others} />);
}

export default Component;
