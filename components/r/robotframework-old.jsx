import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofs7f2bmg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ofs7f2bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:robotframework-old"} {...others} />);
}

export default Component;
