import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xja7l4brt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xja7l4brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-vertical2-filled"} {...others} />);
}

export default Component;
