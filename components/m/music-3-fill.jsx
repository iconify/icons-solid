import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgcif9d1i.css';
import '../../css/w/wsl_n0boy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgcif9d1i"/><path class="wsl_n0boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:music-3-fill"} {...others} />);
}

export default Component;
