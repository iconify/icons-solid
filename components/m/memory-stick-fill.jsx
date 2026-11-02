import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7z_3tbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7z_3tbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:memory-stick-fill"} {...others} />);
}

export default Component;
