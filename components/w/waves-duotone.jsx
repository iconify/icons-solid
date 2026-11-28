import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df8v87a8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="df8v87a8v primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waves-duotone"} {...others} />);
}

export default Component;
