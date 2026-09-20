import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i__vh5p7e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i__vh5p7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:logstash-output"} {...others} />);
}

export default Component;
