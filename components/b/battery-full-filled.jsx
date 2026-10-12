import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pca152bqg.css';
import '../../css/f/fdgucpbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pca152bqg"/><path class="fdgucpbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:battery-full-filled"} {...others} />);
}

export default Component;
