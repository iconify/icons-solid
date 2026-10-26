import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo5fttb-r.css';
import '../../css/g/go5k__bal.css';
import '../../css/j/jh2-g0auj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jo5fttb-r"/><path class="go5k__bal"/><path class="jh2-g0auj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heat-therapy-24px"} {...others} />);
}

export default Component;
