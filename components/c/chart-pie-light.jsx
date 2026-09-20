import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctceaps1p.css';
import '../../css/y/yg4acmb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctceaps1p"/><path class="yg4acmb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-pie-light"} {...others} />);
}

export default Component;
