import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcxeqn1hy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcxeqn1hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:repeat-sharp"} {...others} />);
}

export default Component;
