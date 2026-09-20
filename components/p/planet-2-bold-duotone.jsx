import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17fuccch.css';
import '../../css/h/huyag0f5j.css';
import '../../css/v/v4a__jb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v17fuccch"/><path class="huyag0f5j"/><path clip-rule="evenodd" class="v4a__jb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-2-bold-duotone"} {...others} />);
}

export default Component;
