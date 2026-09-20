import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byp3dbcaf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="byp3dbcaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:social-reddit"} {...others} />);
}

export default Component;
