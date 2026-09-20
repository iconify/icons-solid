import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu6c_ub0k.css';
import '../../css/c/c0644sbod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu6c_ub0k"/><path class="c0644sbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-bubble-square-search"} {...others} />);
}

export default Component;
