import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-zm9h2cw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-zm9h2cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:system-restart"} {...others} />);
}

export default Component;
