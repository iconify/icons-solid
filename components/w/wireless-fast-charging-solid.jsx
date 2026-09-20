import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt8vvo7-r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tt8vvo7-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:wireless-fast-charging-solid"} {...others} />);
}

export default Component;
