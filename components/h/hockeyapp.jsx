import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv9rlsbfk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cv9rlsbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:hockeyapp"} {...others} />);
}

export default Component;
