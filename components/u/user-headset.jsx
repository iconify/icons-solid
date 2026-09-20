import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkgnmvqjs.css';
import '../../css/q/qxlpaybyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkgnmvqjs"/><path class="qxlpaybyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:user-headset"} {...others} />);
}

export default Component;
