import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn7_0n8ej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn7_0n8ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ladder-fill"} {...others} />);
}

export default Component;
