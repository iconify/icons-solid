import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0x_ddciz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0x_ddciz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:credit-card-settings"} {...others} />);
}

export default Component;
