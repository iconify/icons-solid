import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei0prijnf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ei0prijnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:filter-2-flat"} {...others} />);
}

export default Component;
