import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-5d3-a9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-5d3-a9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:window-grid"} {...others} />);
}

export default Component;
