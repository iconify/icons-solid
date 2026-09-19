import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8nipv_he.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e8nipv_he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:code-circle"} {...others} />);
}

export default Component;
