import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-u0a7jne.css';
import '../../css/u/uzpcbh81x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-u0a7jne"/><path clip-rule="evenodd" class="uzpcbh81x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:school-bench-2"} {...others} />);
}

export default Component;
