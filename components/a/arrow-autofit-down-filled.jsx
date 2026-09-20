import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avkg3bs5s.css';
import '../../css/v/v04xb8btp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="avkg3bs5s"/><path class="v04xb8btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-autofit-down-filled"} {...others} />);
}

export default Component;
