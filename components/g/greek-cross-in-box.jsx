import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx588wb3x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xx588wb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:greek-cross-in-box"} {...others} />);
}

export default Component;
