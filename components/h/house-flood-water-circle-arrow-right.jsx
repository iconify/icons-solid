import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoag9pb3r.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="aoag9pb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:house-flood-water-circle-arrow-right"} {...others} />);
}

export default Component;
