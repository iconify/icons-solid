import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0cemnzaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0cemnzaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-code-filled"} {...others} />);
}

export default Component;
