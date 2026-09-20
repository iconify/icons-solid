import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ua0mm9f.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="e7ua0mm9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:calendar-plus-solid"} {...others} />);
}

export default Component;
