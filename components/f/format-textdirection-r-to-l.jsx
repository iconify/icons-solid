import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s25dc911s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s25dc911s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-textdirection-r-to-l"} {...others} />);
}

export default Component;
