import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l18-8umqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l18-8umqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:azerbaijani-manat"} {...others} />);
}

export default Component;
