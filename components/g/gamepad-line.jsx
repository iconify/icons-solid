import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlq4g3q-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlq4g3q-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:gamepad-line"} {...others} />);
}

export default Component;
