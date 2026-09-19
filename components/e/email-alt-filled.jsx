import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmth8o4lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fmth8o4lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:email-alt-filled"} {...others} />);
}

export default Component;
