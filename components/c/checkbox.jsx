import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6qqvlb9x.css';

const viewBox = {"width":700,"height":677};
const content = `<path class="k6qqvlb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:checkbox"} {...others} />);
}

export default Component;
