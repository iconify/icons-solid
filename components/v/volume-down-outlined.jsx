import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z78feybob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z78feybob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:volume-down-outlined"} {...others} />);
}

export default Component;
