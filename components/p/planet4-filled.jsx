import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6hujrb1l.css';
import '../../css/u/ujb0nvh4p.css';
import '../../css/t/t2h-yb7be.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n6hujrb1l"/><path class="ujb0nvh4p"/><path clip-rule="evenodd" class="t2h-yb7be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:planet4-filled"} {...others} />);
}

export default Component;
