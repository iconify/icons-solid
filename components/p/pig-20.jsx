import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njdpvjbzg.css';
import '../../css/f/fmukgjbig.css';
import '../../css/j/jlr84fbeb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="njdpvjbzg"/><path class="fmukgjbig"/><path class="jlr84fbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pig-20"} {...others} />);
}

export default Component;
