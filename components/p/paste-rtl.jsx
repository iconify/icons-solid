import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl12y3b3s.css';
import '../../css/g/grg2vfnmu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pl12y3b3s"/><path class="grg2vfnmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:paste-rtl"} {...others} />);
}

export default Component;
