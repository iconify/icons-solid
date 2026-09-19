import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpg5sf9ms.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dpg5sf9ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:comet"} {...others} />);
}

export default Component;
