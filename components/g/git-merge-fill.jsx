import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygpegbo2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygpegbo2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:git-merge-fill"} {...others} />);
}

export default Component;
