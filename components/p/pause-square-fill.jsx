import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo1p5vwpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yo1p5vwpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:pause-square-fill"} {...others} />);
}

export default Component;
