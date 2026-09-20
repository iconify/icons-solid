import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot1pakbmp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ot1pakbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:magnifying-glass"} {...others} />);
}

export default Component;
