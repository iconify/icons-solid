import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3wa9ccwz.css';
import '../../css/x/x504fpbyz.css';
import '../../css/f/frbawzy9o.css';
import '../../css/e/etujzkb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n3wa9ccwz"/><path class="x504fpbyz"/><path class="frbawzy9o"/><path class="etujzkb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users2-duotone"} {...others} />);
}

export default Component;
