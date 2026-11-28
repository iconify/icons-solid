import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdx32lbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdx32lbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flip-vertical-solid"} {...others} />);
}

export default Component;
