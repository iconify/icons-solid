import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmhj1ffwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmhj1ffwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:teleconference"} {...others} />);
}

export default Component;
