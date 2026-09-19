import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmk826btk.css';
import '../../css/i/i920hcbev.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hmk826btk"/><path class="i920hcbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:compass"} {...others} />);
}

export default Component;
