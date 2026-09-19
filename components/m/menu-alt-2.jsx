import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le8ab_e8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le8ab_e8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:menu-alt-2"} {...others} />);
}

export default Component;
