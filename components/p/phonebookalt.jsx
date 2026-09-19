import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg8u_7bry.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="fg8u_7bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:phonebookalt"} {...others} />);
}

export default Component;
