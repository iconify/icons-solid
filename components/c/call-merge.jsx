import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3_xu5-hc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3_xu5-hc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:call-merge"} {...others} />);
}

export default Component;
