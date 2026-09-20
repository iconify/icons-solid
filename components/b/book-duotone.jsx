import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo6_upbad.css';
import '../../css/b/bnh3jm53u.css';
import '../../css/v/v7--g6qpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uo6_upbad"/><path class="bnh3jm53u"/><path class="v7--g6qpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book-duotone"} {...others} />);
}

export default Component;
