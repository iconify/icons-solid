import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_9297i3y.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="h_9297i3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:skype"} {...others} />);
}

export default Component;
