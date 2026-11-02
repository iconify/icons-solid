import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyjhe7l6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyjhe7l6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:disabled-2-line"} {...others} />);
}

export default Component;
