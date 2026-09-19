import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv2fvlc0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv2fvlc0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:rooms-outdoor"} {...others} />);
}

export default Component;
