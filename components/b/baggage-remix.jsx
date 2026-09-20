import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy1uhnb5w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="oy1uhnb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:baggage-remix"} {...others} />);
}

export default Component;
