import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh3gsqb4d.css';

const viewBox = {"width":748.681,"height":1000};
const content = `<path class="zh3gsqb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:twitter"} {...others} />);
}

export default Component;
