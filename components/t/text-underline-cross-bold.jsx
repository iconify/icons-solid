import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3zgcjb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3zgcjb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-cross-bold"} {...others} />);
}

export default Component;
