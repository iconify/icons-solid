import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ght7cujyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ght7cujyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:panel-glass-door2-close"} {...others} />);
}

export default Component;
