import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8l2z-7sl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g8l2z-7sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gamepad2-filled"} {...others} />);
}

export default Component;
