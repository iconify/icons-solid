import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhfc7cbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhfc7cbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:arrow-left"} {...others} />);
}

export default Component;
