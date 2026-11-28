import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of36-uh_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of36-uh_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:message-square-heart"} {...others} />);
}

export default Component;
