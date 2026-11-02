import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2j6t6bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2j6t6bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:laptop-minimal-check-fill"} {...others} />);
}

export default Component;
