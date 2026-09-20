import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8xg3v5yh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8xg3v5yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wind2-filled"} {...others} />);
}

export default Component;
