import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzm6tn2ba.css';
import '../../css/f/fyf-67bhl.css';

const viewBox = {"width":14.464,"height":12.504};
const content = `<path clip-rule="evenodd" class="pzm6tn2ba"/><path class="fyf-67bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pocket"} {...others} />);
}

export default Component;
