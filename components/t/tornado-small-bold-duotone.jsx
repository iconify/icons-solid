import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bz2npzqvw.css';
import '../../css/r/r8wz8wbhk.css';
import '../../css/u/u3epmpbfp.css';
import '../../css/y/yk2mimvfx.css';
import '../../css/z/z5_znd0fo.css';
import '../../css/a/ahh084bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="bz2npzqvw"/><path class="r8wz8wbhk"/></g><path class="u3epmpbfp"/><path clip-rule="evenodd" class="yk2mimvfx"/><path class="z5_znd0fo"/><path class="ahh084bqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-bold-duotone"} {...others} />);
}

export default Component;
