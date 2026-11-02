import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iks4w9psj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iks4w9psj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:middle-finger-fill"} {...others} />);
}

export default Component;
