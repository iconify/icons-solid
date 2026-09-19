import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjp8ftb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fjp8ftb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:script"} {...others} />);
}

export default Component;
