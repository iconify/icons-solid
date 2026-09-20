import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk7uxg33b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tk7uxg33b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-double-sharp"} {...others} />);
}

export default Component;
