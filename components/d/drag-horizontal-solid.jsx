import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-ctyin-i.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="h-ctyin-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:drag-horizontal-solid"} {...others} />);
}

export default Component;
