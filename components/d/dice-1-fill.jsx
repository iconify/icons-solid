import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsh1b3tio.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tsh1b3tio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:dice-1-fill"} {...others} />);
}

export default Component;
