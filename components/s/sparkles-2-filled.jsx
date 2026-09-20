import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed1dqw0re.css';
import '../../css/j/jesdcv9vd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ed1dqw0re"/><path class="jesdcv9vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sparkles-2-filled"} {...others} />);
}

export default Component;
