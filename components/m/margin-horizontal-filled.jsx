import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lud6hzb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lud6hzb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:margin-horizontal-filled"} {...others} />);
}

export default Component;
