import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at64shbkj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="at64shbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:hourglass"} {...others} />);
}

export default Component;
