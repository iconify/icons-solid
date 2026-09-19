import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8dgss6_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q8dgss6_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pentagon-fill"} {...others} />);
}

export default Component;
