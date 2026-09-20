import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thg9xjb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thg9xjb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:arrows-expand-full"} {...others} />);
}

export default Component;
