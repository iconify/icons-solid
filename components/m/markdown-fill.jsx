import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k46kedfbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k46kedfbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:markdown-fill"} {...others} />);
}

export default Component;
