import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8ycu4_ma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8ycu4_ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:corner-down-right-fill"} {...others} />);
}

export default Component;
