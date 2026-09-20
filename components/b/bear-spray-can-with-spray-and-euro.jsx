import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3k_j8bpc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e3k_j8bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bear-spray-can-with-spray-and-euro"} {...others} />);
}

export default Component;
