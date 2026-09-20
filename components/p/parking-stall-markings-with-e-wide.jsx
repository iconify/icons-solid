import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri-3uvbfe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ri-3uvbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:parking-stall-markings-with-e-wide"} {...others} />);
}

export default Component;
