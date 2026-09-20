import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmuay5b3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmuay5b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:turkish-lira-solid"} {...others} />);
}

export default Component;
