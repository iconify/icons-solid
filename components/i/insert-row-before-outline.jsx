import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh78-0bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gh78-0bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:insert-row-before-outline"} {...others} />);
}

export default Component;
