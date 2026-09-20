import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cickl6b4l.css';
import '../../css/i/i8f6vsb_g.css';
import '../../css/n/n8gcj1byj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cickl6b4l"/><path class="i8f6vsb_g"/><path class="n8gcj1byj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:instagram-circle"} {...others} />);
}

export default Component;
