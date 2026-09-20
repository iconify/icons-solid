import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-0hx-lvs.css';
import '../../css/y/y90hevbjd.css';
import '../../css/j/j_41ouhvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j-0hx-lvs"/><path class="y90hevbjd"/><path class="j_41ouhvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-cirlce-add-filled"} {...others} />);
}

export default Component;
