import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhyy_4bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhyy_4bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:crystal-ball-fill"} {...others} />);
}

export default Component;
