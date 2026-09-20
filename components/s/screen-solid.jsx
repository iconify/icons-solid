import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kova1rb8c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kova1rb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:screen-solid"} {...others} />);
}

export default Component;
