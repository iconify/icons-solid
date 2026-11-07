import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewu5_fbdb.css';
import '../../css/g/g4sooab0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ewu5_fbdb"/><path class="g4sooab0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-spacing-bold-duotone"} {...others} />);
}

export default Component;
