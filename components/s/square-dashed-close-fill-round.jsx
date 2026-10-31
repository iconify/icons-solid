import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j92as5bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j92as5bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-close-fill-round"} {...others} />);
}

export default Component;
