import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o07u8dbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o07u8dbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-down-right-dashed-panel"} {...others} />);
}

export default Component;
