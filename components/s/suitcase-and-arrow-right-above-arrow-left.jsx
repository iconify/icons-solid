import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew69n7dgx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ew69n7dgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:suitcase-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
