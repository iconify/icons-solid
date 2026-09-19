import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inzkwub1y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="inzkwub1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:windows"} {...others} />);
}

export default Component;
