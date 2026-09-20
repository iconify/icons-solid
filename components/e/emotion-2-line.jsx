import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdy-st72z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdy-st72z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:emotion-2-line"} {...others} />);
}

export default Component;
