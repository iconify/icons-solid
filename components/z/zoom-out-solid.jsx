import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fan6-n1tt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fan6-n1tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zoom-out-solid"} {...others} />);
}

export default Component;
