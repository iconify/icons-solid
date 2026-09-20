import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm4zygbze.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dm4zygbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pill-bottle-with-circular-pill"} {...others} />);
}

export default Component;
