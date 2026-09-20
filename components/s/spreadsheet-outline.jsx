import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az01fdz1x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="az01fdz1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:spreadsheet-outline"} {...others} />);
}

export default Component;
