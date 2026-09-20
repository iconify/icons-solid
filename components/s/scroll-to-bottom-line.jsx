import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fid1iybje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fid1iybje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:scroll-to-bottom-line"} {...others} />);
}

export default Component;
