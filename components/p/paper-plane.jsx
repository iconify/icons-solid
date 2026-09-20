import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cge0y-ejd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cge0y-ejd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:paper-plane"} {...others} />);
}

export default Component;
