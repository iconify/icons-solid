import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju-byuhch.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ju-byuhch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:email-fast-filled"} {...others} />);
}

export default Component;
