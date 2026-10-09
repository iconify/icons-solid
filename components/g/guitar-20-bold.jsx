import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq63fdbpf.css';
import '../../css/f/fuoorab6u.css';
import '../../css/b/bmhruu9eq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vq63fdbpf"/><path class="fuoorab6u"/><path class="bmhruu9eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:guitar-20-bold"} {...others} />);
}

export default Component;
