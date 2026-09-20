import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt3y6rb7m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zt3y6rb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:social-youtube"} {...others} />);
}

export default Component;
