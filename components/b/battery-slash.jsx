import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2z-5fbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2z-5fbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:battery-slash"} {...others} />);
}

export default Component;
