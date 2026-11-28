import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6yvi_chi.css';
import '../../css/t/t8i6bfbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6yvi_chi secondary"/><path class="primary t8i6bfbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stop-duo"} {...others} />);
}

export default Component;
