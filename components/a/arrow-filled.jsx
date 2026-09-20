import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twku4hbjt.css';

const viewBox = {"width":12,"height":24};
const content = `<path class="twku4hbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:arrow-filled"} {...others} />);
}

export default Component;
