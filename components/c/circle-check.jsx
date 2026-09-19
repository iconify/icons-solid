import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmk826btk.css';
import '../../css/j/jpdwis9wp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hmk826btk"/><path class="jpdwis9wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:circle-check"} {...others} />);
}

export default Component;
