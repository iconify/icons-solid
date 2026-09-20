import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px9-5bcch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="px9-5bcch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:line-height-fill"} {...others} />);
}

export default Component;
