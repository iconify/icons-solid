import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu4gmzb1h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uu4gmzb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:suitcase-in-rectangle-outline-under-key"} {...others} />);
}

export default Component;
