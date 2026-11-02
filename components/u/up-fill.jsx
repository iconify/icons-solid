import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoi7d2btf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoi7d2btf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:up-fill"} {...others} />);
}

export default Component;
