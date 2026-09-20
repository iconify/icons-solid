import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys5kuk1gd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ys5kuk1gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:instagram-fill"} {...others} />);
}

export default Component;
