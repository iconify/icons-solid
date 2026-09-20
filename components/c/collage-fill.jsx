import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjf7ycblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjf7ycblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:collage-fill"} {...others} />);
}

export default Component;
