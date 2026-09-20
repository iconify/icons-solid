import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi8jfjbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi8jfjbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:focus-center-24"} {...others} />);
}

export default Component;
