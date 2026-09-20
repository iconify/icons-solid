import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lb7c3hbjm.css';
import '../../css/i/i6p0z6krc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lb7c3hbjm"/><path class="i6p0z6krc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-autofit-right-filled"} {...others} />);
}

export default Component;
