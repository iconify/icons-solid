import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn0q0ub8q.css';
import '../../css/d/dfdq8t3qq.css';
import '../../css/g/g4y8tubxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rn0q0ub8q"/><path class="dfdq8t3qq"/><path class="g4y8tubxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gryt-light"} {...others} />);
}

export default Component;
