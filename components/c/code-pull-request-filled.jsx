import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hutgu3b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hutgu3b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:code-pull-request-filled"} {...others} />);
}

export default Component;
