import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpg9xubhg.css';
import '../../css/y/y4dz8u3sm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fpg9xubhg"/><path class="y4dz8u3sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:quality-1-16"} {...others} />);
}

export default Component;
