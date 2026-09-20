import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccv0f09co.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccv0f09co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:fediverse-line"} {...others} />);
}

export default Component;
