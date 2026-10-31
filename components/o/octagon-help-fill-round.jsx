import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2ok6dbki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2ok6dbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:octagon-help-fill-round"} {...others} />);
}

export default Component;
