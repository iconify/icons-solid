import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek71r_bye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ek71r_bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:intercom-alt"} {...others} />);
}

export default Component;
