import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr2iu8bhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hr2iu8bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gamepad-solid"} {...others} />);
}

export default Component;
