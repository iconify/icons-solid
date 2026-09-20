import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odfhc8bof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odfhc8bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:comments-2-line"} {...others} />);
}

export default Component;
