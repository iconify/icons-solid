import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz1b3xbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gz1b3xbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-left-2-fill"} {...others} />);
}

export default Component;
