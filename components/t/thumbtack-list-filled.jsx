import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pw9cfbbav.css';
import '../../css/p/p1dkmfbom.css';
import '../../css/g/gh1dxtbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pw9cfbbav"/><path class="p1dkmfbom"/><path clip-rule="evenodd" class="gh1dxtbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:thumbtack-list-filled"} {...others} />);
}

export default Component;
