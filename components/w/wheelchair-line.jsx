import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd-lxybje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd-lxybje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:wheelchair-line"} {...others} />);
}

export default Component;
