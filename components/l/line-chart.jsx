import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3v1wwjwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3v1wwjwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:line-chart"} {...others} />);
}

export default Component;
