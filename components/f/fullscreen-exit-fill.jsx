import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf9pswoxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sf9pswoxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fullscreen-exit-fill"} {...others} />);
}

export default Component;
