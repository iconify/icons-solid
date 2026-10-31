import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou0e18q7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ou0e18q7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-chevron-down-round"} {...others} />);
}

export default Component;
