import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v16u2yk6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v16u2yk6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:mail-check-fill"} {...others} />);
}

export default Component;
