import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7vp5_gqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a7vp5_gqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:flash-timer-solid"} {...others} />);
}

export default Component;
