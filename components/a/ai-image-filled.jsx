import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcc7li89s.css';
import '../../css/w/w97i0hbdf.css';
import '../../css/j/j9emnib3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcc7li89s"/><path class="w97i0hbdf"/><path class="j9emnib3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-image-filled"} {...others} />);
}

export default Component;
