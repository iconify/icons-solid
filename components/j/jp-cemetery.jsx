import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-y81wbnx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d-y81wbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:jp-cemetery"} {...others} />);
}

export default Component;
