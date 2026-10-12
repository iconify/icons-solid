import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph626sk7j.css';
import '../../css/p/p3y5o8bll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph626sk7j"/><path class="p3y5o8bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mic-filled"} {...others} />);
}

export default Component;
