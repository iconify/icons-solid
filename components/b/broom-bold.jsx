import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ochnrrb8e.css';
import '../../css/k/kvj5aub-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ochnrrb8e"/><path class="kvj5aub-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-bold"} {...others} />);
}

export default Component;
