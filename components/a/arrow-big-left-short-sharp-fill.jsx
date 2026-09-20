import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r07pcme2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r07pcme2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-left-short-sharp-fill"} {...others} />);
}

export default Component;
