import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoc2j8l5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yoc2j8l5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:globe-off-fill"} {...others} />);
}

export default Component;
