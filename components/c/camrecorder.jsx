import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzvdfk53z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bzvdfk53z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:camrecorder"} {...others} />);
}

export default Component;
