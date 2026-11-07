import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1b-v8rmi.css';
import '../../css/w/whbeue6my.css';
import '../../css/a/at92h2-kh.css';
import '../../css/c/ch9w-bbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1b-v8rmi"/><path class="whbeue6my"/><path clip-rule="evenodd" class="at92h2-kh"/><path class="ch9w-bbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-lines-remove-bold-duotone"} {...others} />);
}

export default Component;
