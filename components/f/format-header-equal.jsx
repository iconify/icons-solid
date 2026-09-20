import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-g4q9p2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-g4q9p2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-header-equal"} {...others} />);
}

export default Component;
