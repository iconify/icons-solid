import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvhjv7b-o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tvhjv7b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:checkbox-fill-16"} {...others} />);
}

export default Component;
