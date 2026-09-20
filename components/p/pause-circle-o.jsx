import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd8eg6pwc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jd8eg6pwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:pause-circle-o"} {...others} />);
}

export default Component;
