import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5y-ecs9j.css';
import '../../css/i/iaa-v9ber.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="v5y-ecs9j"/><path class="iaa-v9ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:speaker-wave"} {...others} />);
}

export default Component;
