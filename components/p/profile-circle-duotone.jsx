import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht8aw2boj.css';
import '../../css/t/t4me6eb9h.css';
import '../../css/y/y_9la8ijd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ht8aw2boj"/><path class="t4me6eb9h"/><path class="y_9la8ijd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:profile-circle-duotone"} {...others} />);
}

export default Component;
