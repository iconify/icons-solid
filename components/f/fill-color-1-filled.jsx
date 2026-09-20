import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwsi43bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwsi43bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fill-color-1-filled"} {...others} />);
}

export default Component;
