import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdd7vy8ix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdd7vy8ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-up-dashed-panel-fill"} {...others} />);
}

export default Component;
