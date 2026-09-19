import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlm0gmz7y.css';
import '../../css/n/nkhlq_a6i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="hlm0gmz7y"/><path class="nkhlq_a6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:window-dock"} {...others} />);
}

export default Component;
