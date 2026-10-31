import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doc4jkx1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doc4jkx1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-left-fill-round"} {...others} />);
}

export default Component;
