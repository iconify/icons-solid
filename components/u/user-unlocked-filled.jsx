import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tffxk6toi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tffxk6toi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-unlocked-filled"} {...others} />);
}

export default Component;
