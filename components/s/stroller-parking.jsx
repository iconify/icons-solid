import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnck5obfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnck5obfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:stroller-parking"} {...others} />);
}

export default Component;
