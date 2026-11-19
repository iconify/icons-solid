import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh43to3cm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh43to3cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aquarius"} {...others} />);
}

export default Component;
