import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h16k0hb6q.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="h16k0hb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:lock-closed-20-solid"} {...others} />);
}

export default Component;
