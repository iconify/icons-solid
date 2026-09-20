import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjn9f7o-d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gjn9f7o-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:reply-16"} {...others} />);
}

export default Component;
