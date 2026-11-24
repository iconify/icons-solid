import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8-88ads.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba8-88ads"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mountain-filled"} {...others} />);
}

export default Component;
