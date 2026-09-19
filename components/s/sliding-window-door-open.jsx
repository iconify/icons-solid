import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg8w73bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bg8w73bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:sliding-window-door-open"} {...others} />);
}

export default Component;
