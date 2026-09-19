import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-cd4m-xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-cd4m-xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:left-angle-arrow"} {...others} />);
}

export default Component;
