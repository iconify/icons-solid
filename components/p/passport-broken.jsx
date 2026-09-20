import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z__w1mbdy.css';
import '../../css/u/upaxagjrx.css';
import '../../css/g/ga7t0girt.css';
import '../../css/c/chuhguiil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z__w1mbdy"/><path class="upaxagjrx"/><path class="ga7t0girt"/><path class="chuhguiil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-broken"} {...others} />);
}

export default Component;
