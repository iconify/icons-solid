import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy1qryb3w.css';
import '../../css/f/fd6b2rb5y.css';
import '../../css/p/pk3rcgb0u.css';
import '../../css/u/uxaxeqbab.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uy1qryb3w"/><path class="fd6b2rb5y"/><path class="pk3rcgb0u"/><path class="uxaxeqbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:taxi-20-bold"} {...others} />);
}

export default Component;
