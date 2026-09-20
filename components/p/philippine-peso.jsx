import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-ufl4b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-ufl4b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:philippine-peso"} {...others} />);
}

export default Component;
