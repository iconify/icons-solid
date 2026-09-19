import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leeazsipl.css';
import '../../css/h/hmk826btk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="leeazsipl"/><path class="hmk826btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:circle-close"} {...others} />);
}

export default Component;
