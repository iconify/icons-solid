import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m96ctz9ix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m96ctz9ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:text-align-right-solid"} {...others} />);
}

export default Component;
