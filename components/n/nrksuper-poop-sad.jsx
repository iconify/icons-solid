import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_e92-c_t.css';
import '../../css/m/my-9xzb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t_e92-c_t"/><path class="my-9xzb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:nrksuper-poop-sad"} {...others} />);
}

export default Component;
