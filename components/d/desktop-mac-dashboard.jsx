import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlx4qbcqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlx4qbcqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:desktop-mac-dashboard"} {...others} />);
}

export default Component;
