import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjajlikcf.css';
import '../../css/q/q4b6bxbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sjajlikcf"/><path class="q4b6bxbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:train-fill"} {...others} />);
}

export default Component;
