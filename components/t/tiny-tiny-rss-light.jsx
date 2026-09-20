import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7l6jtghu.css';
import '../../css/j/jeg4l5bwa.css';
import '../../css/q/qviplbbsj.css';
import '../../css/q/qvjnwub0v.css';

const viewBox = {"width":512,"height":512};
const content = `<circle transform="rotate(-89.685 70.225 441.78)" class="w7l6jtghu"/><path class="jeg4l5bwa"/><path class="qviplbbsj"/><path class="qvjnwub0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiny-tiny-rss-light"} {...others} />);
}

export default Component;
