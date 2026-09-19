import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvk-mpx8a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vvk-mpx8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:zendesk-stroke-16"} {...others} />);
}

export default Component;
