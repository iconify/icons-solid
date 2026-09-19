import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_3eqdman.css';
import '../../css/e/eh1h-1bqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_3eqdman"/><path class="eh1h-1bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-paste"} {...others} />);
}

export default Component;
