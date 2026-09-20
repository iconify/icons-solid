import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hknlbeg7s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hknlbeg7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-top-left-beside-arrow-top-right-above-arrow-bottom-left-beside-arrow-bottom-right"} {...others} />);
}

export default Component;
