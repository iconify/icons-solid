import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk67bzb9l.css';
import '../../css/p/pcvgedqfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk67bzb9l"/><path class="pcvgedqfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:behance"} {...others} />);
}

export default Component;
