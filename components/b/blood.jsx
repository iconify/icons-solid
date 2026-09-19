import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erk77bbpw.css';
import '../../css/j/j7o3mobxk.css';
import '../../css/r/rk5ieobef.css';

const viewBox = {"width":14,"height":24};
const content = `<path class="erk77bbpw"/><path class="j7o3mobxk"/><path class="rk5ieobef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:blood"} {...others} />);
}

export default Component;
