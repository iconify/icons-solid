import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w48m7-bwv.css';
import '../../css/r/r4-mswj9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w48m7-bwv"/><path class="r4-mswj9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mod"} {...others} />);
}

export default Component;
