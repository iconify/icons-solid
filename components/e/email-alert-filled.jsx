import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8o11-toh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v8o11-toh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:email-alert-filled"} {...others} />);
}

export default Component;
