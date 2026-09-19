import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5ud2xbhc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5ud2xbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:original-size-fill-16"} {...others} />);
}

export default Component;
