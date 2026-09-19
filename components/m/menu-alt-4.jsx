import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saz4hzcge.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="saz4hzcge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:menu-alt-4"} {...others} />);
}

export default Component;
