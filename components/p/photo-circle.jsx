import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/if82tobov.css';
import '../../css/y/yvm4rmb-d.css';
import '../../css/j/j0uan6p9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="if82tobov"/><path class="yvm4rmb-d"/><path class="j0uan6p9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-circle"} {...others} />);
}

export default Component;
