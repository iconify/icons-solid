import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or4mibcim.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="or4mibcim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:goaccess-dark"} {...others} />);
}

export default Component;
