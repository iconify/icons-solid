import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2g541tdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2g541tdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:pause-octagon-solid"} {...others} />);
}

export default Component;
