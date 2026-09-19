import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6kszsz6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6kszsz6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:joomla"} {...others} />);
}

export default Component;
