import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs7gssbtl.css';
import '../../css/s/s1qbw8bvu.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="hs7gssbtl"/><path class="s1qbw8bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:search"} {...others} />);
}

export default Component;
