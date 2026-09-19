import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxlfq5tuk.css';
import '../../css/l/leqoybczl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxlfq5tuk"/><path class="leqoybczl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-error-circle"} {...others} />);
}

export default Component;
