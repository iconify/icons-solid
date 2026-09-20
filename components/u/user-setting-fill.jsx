import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waq0mlnar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="waq0mlnar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-setting-fill"} {...others} />);
}

export default Component;
