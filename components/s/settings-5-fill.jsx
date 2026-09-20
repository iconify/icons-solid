import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnb6j5bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnb6j5bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:settings-5-fill"} {...others} />);
}

export default Component;
