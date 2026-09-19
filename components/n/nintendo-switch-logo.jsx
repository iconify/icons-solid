import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osn55wydk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osn55wydk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nintendo-switch-logo"} {...others} />);
}

export default Component;
