import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr4i-mvju.css';
import '../../css/p/pqy87ebie.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zr4i-mvju"/><path class="pqy87ebie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:raisedhandsfingerssplayed"} {...others} />);
}

export default Component;
