import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2-u_vb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2-u_vb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chevron-up-solid"} {...others} />);
}

export default Component;
