import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml8f8msdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml8f8msdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:medium-fill"} {...others} />);
}

export default Component;
