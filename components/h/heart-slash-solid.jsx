import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4t2n67if.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4t2n67if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:heart-slash-solid"} {...others} />);
}

export default Component;
