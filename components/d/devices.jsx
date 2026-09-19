import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1ol9kbem.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x1ol9kbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:devices"} {...others} />);
}

export default Component;
