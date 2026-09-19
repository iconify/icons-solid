import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8q1lbb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f8q1lbb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:ascending"} {...others} />);
}

export default Component;
