import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzgbqj-sb.css';
import '../../css/f/fkpqvet-p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hzgbqj-sb"/><path class="fkpqvet-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-briefcase"} {...others} />);
}

export default Component;
