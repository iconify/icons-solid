import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu7mpeebk.css';
import '../../css/n/npp4pnb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu7mpeebk"/><path class="npp4pnb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-left-arrow-circle"} {...others} />);
}

export default Component;
