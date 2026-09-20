import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am2benrmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am2benrmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:robot-industrial-outline"} {...others} />);
}

export default Component;
