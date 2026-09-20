import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj6mqtbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cj6mqtbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:envelope-unread"} {...others} />);
}

export default Component;
