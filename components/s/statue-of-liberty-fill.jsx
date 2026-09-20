import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvs1ozbej.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jvs1ozbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:statue-of-liberty-fill"} {...others} />);
}

export default Component;
