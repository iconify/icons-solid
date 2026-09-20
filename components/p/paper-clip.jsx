import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ossn1lbdl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ossn1lbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:paper-clip"} {...others} />);
}

export default Component;
