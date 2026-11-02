import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd1hdgbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd1hdgbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:distribute-spacing-vertical-fill"} {...others} />);
}

export default Component;
