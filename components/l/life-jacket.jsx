import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj9zj5eja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bj9zj5eja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:life-jacket"} {...others} />);
}

export default Component;
