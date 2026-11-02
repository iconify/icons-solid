import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlf0m3-1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlf0m3-1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:park-fill"} {...others} />);
}

export default Component;
