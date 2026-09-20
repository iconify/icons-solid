import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa4glgq1e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aa4glgq1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:indent-rtl"} {...others} />);
}

export default Component;
