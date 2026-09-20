import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwxxzy0-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwxxzy0-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:minus-waves"} {...others} />);
}

export default Component;
