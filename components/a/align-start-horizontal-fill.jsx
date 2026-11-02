import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnz9l5-su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnz9l5-su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-start-horizontal-fill"} {...others} />);
}

export default Component;
