import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri_p3wqir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri_p3wqir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:base-station-fill"} {...others} />);
}

export default Component;
