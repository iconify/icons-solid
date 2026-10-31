import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t18l-9bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t18l-9bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-waterfall-duotone-round"} {...others} />);
}

export default Component;
