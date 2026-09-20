import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wco3rcpyi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wco3rcpyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:list-bullet"} {...others} />);
}

export default Component;
